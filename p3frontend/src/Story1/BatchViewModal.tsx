import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  ButtonGroup,
} from "reactstrap";
import "../../src/index.css";
import { connect } from "react-redux";
import { allTheMapStateToProps } from "../redux/reducers";
import { allTheActionMappers } from "../redux/action-mapper";
import { Batch } from "../models/Batch";
import { ErrorAlert } from "../GeneralPurposeHelpers/ErrorAlert";
import { axiosClient } from "../api/axios";
import { BatchTrainersTableRedux } from "./BatchTrainersTable";
import { store } from "../redux/store";
import BatchAssocTable, { BatchAssocTableRedux } from "./BatchAssocTable";
import {TrainerAssignmentRedux} from "../Story4/TrainerAssignment"

/*
  <BatchViewModel currentBatch={aSvererBatch} parentState={this.state}/>

  The modal will look like a View button.
  when that button is clicked the modal will pop up.

  This modal will access parentState.batch
*/

interface IPBatchViewModal {
  currentBatch: Batch;
  parentTop: any;

  batchClickActionMapper: (batch: Batch) => void;
  batchUpdateActionMapper: (batch: Batch) => void;
}

export class BatchViewModal extends React.Component<IPBatchViewModal, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      showThis: false,
      displayType: 'AA', //what else do we display in this modal? 'AA' 'AT' 'RC'
      errorObj: null,
      errorMsg: "",
    };
  }

  render() {
    const toggle = () => {
      this.setState({ showThis: !this.state.showThis });
      if (
        store.getState().batch.batch &&
        store.getState().batch.batch.batchId === this.props.currentBatch.batchId
      ) {
        //  this.props.batchClickActionMapper(store.getState().batch.batch)
        return;
      } else {
        this.props.batchClickActionMapper(this.props.currentBatch);
      }
    };

    return (
      <>
        <Button onClick={toggle}>View</Button>
        <Modal
          isOpen={this.state.showThis}
          contentClassName="modalStyle"
          size="lg"
        >
          <ModalHeader toggle={toggle}>
            Batch {this.props.currentBatch.batchId}
          </ModalHeader>
          <ModalBody>
            <Row>
              <Col>
                <b>Start Date:</b>
              </Col>
              <Col>{this.props.currentBatch.startDate}</Col>
            </Row>
            <Row>
              <Col>
                <b>End Date: </b>
              </Col>
              <Col>{this.props.currentBatch.endDate}</Col>
            </Row>
            <Row>
              <Col>
                <b>Curriculum Name:</b>
              </Col>
              <Col>
                {this.props.currentBatch.curriculum
                  ? this.props.currentBatch.curriculum.name
                  : "no-curriculum"}
              </Col>
            </Row>
            <Row>
              <Col>
                <b>Confirmed</b>
                <br />
                <ButtonGroup>
                  <Button
                    color={
                      this.props.currentBatch.isConfirmed
                        ? "primary"
                        : "secondary"
                    }
                    onClick={this.patchABatchChangeIsConfirmed}
                  >
                    Yes
                  </Button>
                  <Button
                    color={
                      this.props.currentBatch.isConfirmed
                        ? "secondary"
                        : "primary"
                    }
                    onClick={this.patchABatchChangeIsConfirmed}
                  >
                    No
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>
            <Row>
              <ErrorAlert
                error={this.state.errorObj}
                message={this.state.errorMsg}
              />
            </Row>
            <br />
            <Row>
              <Col>
                <Button onClick={toggle} color="success">
                  OK
                </Button>
              </Col>


              <Col>
                <Button color={this.state.displayType=='AA' ? "primary" : "secondary"}
                  onClick={() => {
                    this.setState({ displayType: 'AA' });
                  }}
                >
                  Assign Associates
                </Button>
              </Col>


              <Col>
                <Button
                  color={this.state.displayType=='AT'? "primary" : "secondary"}
                  onClick={() => {
                    this.setState({ displayType: 'AT' });
                  }}
                >
                  Assign Trainers
                </Button>
              </Col>

              <Col>
                <Button
                  color={this.state.displayType=='RC' ? "primary" : "secondary"}
                  onClick={() => {
                    this.setState({ displayType: 'RC' });
                  }}
                >
                  Request Consent
                </Button>
              </Col>

            </Row>
            <hr />
          </ModalBody>

          <ModalBody>
            {
            
            
            this.state.displayType=='RC' ? ( //request consent for trainers
              <TrainerAssignmentRedux
                currentBatch={this.props.currentBatch}
                parentTop={this.props.parentTop}
              />
            ) : this.state.displayType=='AA' ? ( //assign associates to this batch
              <BatchAssocTableRedux
                currentBatch={this.props.currentBatch}
                parentTop={this.props.parentTop}
              />
            ) : this.state.displayType=='AT' ? ( //assign trainers to this batch
              <BatchTrainersTableRedux
                currentBatch={this.props.currentBatch}
                parentTop={this.props.parentTop}
              />
            )
              :(<></>)//free space
            
            }
          </ModalBody>
        </Modal>
      </>
    );
  }

  patchABatchChangeIsConfirmed = async () => {
    //change the batch model which is not a react component. just js object
    this.props.currentBatch.isConfirmed = !this.props.currentBatch.isConfirmed;

    try {
      let request = { isConfirmed: this.props.currentBatch.isConfirmed };

      await axiosClient.patch(
        `/batches/${this.props.currentBatch.batchId}`,
        request
      );

      this.props.batchUpdateActionMapper(this.props.currentBatch);
      this.setState({});
    } catch (e) {
      this.setState({
        errorObj: e,
        errorMsg: `Could not change isConfirmed to ${
          this.props.currentBatch.isConfirmed ? "Yes" : "No"
        }`,
      });
    }

    this.props.parentTop.setState({}); //re-render
  };
}

export const BatchViewModalRedux = connect(
  allTheMapStateToProps,
  allTheActionMappers
)(BatchViewModal);
