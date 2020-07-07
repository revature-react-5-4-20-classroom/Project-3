import React from "react";
import { Container, Spinner } from "reactstrap";
import { Batch } from "../models/Batch";
import { ErrorAlert } from "../GeneralPurposeHelpers/ErrorAlert";
import { prnt } from "../GeneralPurposeHelpers/Prnt";
import { axiosClient } from "../api/axios";
import { DualTables } from "./DualTables";
import { connect } from "react-redux";
import { Trainer } from "../models/Trainer";
import { getAllTrainers } from "../api/consent";
import { allTheMapStateToProps } from "../redux/reducers";
import { allTheActionMappers } from "../redux/action-mapper";
import { store } from "../redux/store";
import { PageTitleBar } from "../Components/GenerateBatch/PageTitleBar";

const doPrnt = true; //prnt may be toggled

/*
  <BatchAssocTable currentBatch={aBatchObject}/>

  Displays dual tables where associates can be assigned or removed form batches.
  Displays the associates assigned to the given batch object.
  Associates can be assigned or removed from the batch.
*/

interface IPBatchTrainersTable {
  currentBatch: Batch; //we must give this component a batch for it to work
  parentTop: any;

  addTrainerToBatchActionMapper: (batch: Batch, trainer: Trainer) => void;
  removeTrainerFromBatchActionMapper: (batch: Batch, trainer: Trainer) => void;
}

export default class BatchTrainersTable extends React.Component<
  IPBatchTrainersTable,
  any
> {
  constructor(props: IPBatchTrainersTable) {
    super(props);

    this.state = {
      allTrainers: [], //the trainers we can assign to this batch
      isLoaded: false, //have we fetched the associates from the backend?
      errorObject: null, //when set to an axios error object, it will display the network error nicely
      errorMessage: "", //when set a message it will be displayed, possibly with a network error
    };
  }

  componentDidMount = async () => {
    console.log(`BatchTrainersTable componentDidMount() has been reached`);
    let trains: Trainer[] = [];
    try {
      trains = await getAllTrainers();

      prnt(true, `trains=`, trains);

      //props.currentBatch does not exist here for some reason
      // trains = trains.filter((trainer: Trainer) => {
      //   return !this.props.currentBatch.trainers.includes(trainer);
      // });

      this.setState({
        allTrainers: trains,
        isLoaded: true,
      });
    } catch (e) {
      prnt(true, `Catch e=${e.emssage}`);
      this.setState({
        errorObject: e,
        errorMessage: "Could not retrieve all trainers",
      });
    }
  };

  render() {
    prnt(doPrnt, `BatchTrainersTable render() has been reached`);

    if (this.props.currentBatch == null)
      return <>BatchTrainersTable this.props.currentBatch is null</>;

    let batchTrainerIds = this.props.currentBatch.trainers.map(
      (trainer: Trainer) => {
        return trainer.trainerId;
      }
    );

    let trains = this.state.allTrainers.filter((trainer: Trainer) => {
      return !batchTrainerIds.includes(trainer.trainerId);
    });

    return (
      <Container>
        <PageTitleBar pageTitle='Batch Trainers' />
        <ErrorAlert
          error={this.state.errorObject}
          message={this.state.errorMessage}
        />

        {this.state.isLoaded ? (
          <DualTables
            parentTop={this.props.parentTop}
            onMoveToLeft={(item) => this.updateTraierBatch(item, false)}
            onMoveToRight={(item) => this.updateTraierBatch(item, true)}
            messageLeft='None in the system'
            messageRight='None assigned to this batch'
            // arrayLeft={this.state.allTrainers}
            arrayLeft={trains}
            arrayRight={this.props.currentBatch.trainers}
            headerLeft={
              <>
                All trainers in system <b>{trains.length}</b>
              </>
            }
            headerRight={
              <>
                Trainers in this batch{" "}
                <b>{this.props.currentBatch.trainers.length}</b>
              </>
            }
          />
        ) : (
          <Spinner />
        )}
      </Container>
    );
  }

  /*
    updateTraierBatch(trainer,moveToBatch)

    updates the trainer in the currentBatch. 
    either adds a new training <--> batch assignment or removes one.

    does not handle any consent stuff, just basic add/remove. 
    this does not completly work on back end because the jump table will not go larger than 5 assignments.

    when moveToBatch is:
      true, the assoc is assigned to the currentBatch object
      false, the assoc is assigned to no batch at all. null
  */
  updateTraierBatch = async (train: Trainer, moveToBatch: boolean) => {
    prnt(doPrnt, `BatchTrainersTable updateTraierBatch() has been reached`);

    try {
      if (moveToBatch) {
        let request = {
          trainerId: train.trainerId,
          batchId: this.props.currentBatch.batchId,
        };

        prnt(doPrnt, `patch request=`, request);

        await axiosClient.post("/trainerBatch", request);
        this.props.addTrainerToBatchActionMapper(
          store.getState().batch.batch,
          train
        );
      } else {
        let request = {
          data: {
            trainerId: train.trainerId,
            batchId: this.props.currentBatch.batchId,
          },
        };
        prnt(doPrnt, `delete request=`, request);

        await axiosClient.delete("/trainerBatch", request);
        this.props.removeTrainerFromBatchActionMapper(
          store.getState().batch.batch,
          train
        );
      }
      this.setState({});
    } catch (e) {
      this.setState({
        errorObject: e,
        errorMessage: "Could not update trainer",
      });
    }
    this.props.parentTop.setState({}); //re-render
  };
}

export const BatchTrainersTableRedux = connect(
  allTheMapStateToProps,
  allTheActionMappers
)(BatchTrainersTable);
