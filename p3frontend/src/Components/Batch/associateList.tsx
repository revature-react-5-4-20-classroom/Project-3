import React from "react";
import { Table, Button, Container, Row, Col } from "reactstrap";
import { Associate } from "../../models/Associate";
import { getAllAssociates, updateAssociate } from "../../api/Associate";
import { getBatchById } from "../../api/batch";
import { Batch } from "../../models/Batch";
import { ErrorAlert } from "../../GeneralPurposeHelpers/ErrorAlert";
import { prnt } from "../../GeneralPurposeHelpers/Prnt";
import { axiosClient } from "../../api/axios";

// export class AssociateList extends React.Component<any, any> {
//   render() {
//     return (
//       <Container>
//         <Container>List of Associates</Container>

//       </Container>
//     );
//   }
// }

const doPrnt = true; //prnt may be toggled

interface IASTableModelProps {
  currentBatch: Batch; //we must give this component a batch for it to work
}

interface IASTableModelState {
  //currentBatchId: number;
  associates: Associate[];
  eligibleAssociates: Associate[];
  associatesInBatch: Associate[];
  associatesLoaded: boolean;
  errorObject: any;
  errorMessage: string;
}


export default class AssociateList extends React.Component<
  IASTableModelProps,
  any
> {
  constructor(props: IASTableModelProps) {
    super(props);
    this.state = {
      //currentBatchId : 9,
      associates: [], //everybody that comes from the backend
      eligibleAssociates: [], //interview score >70 and no assigned batch yet
      associatesInBatch: [], //associates chosen for the current batch
      associatesLoaded: false,
      errorObject: null, //when set to an axios error object, it will display the network error nicely
      errorMessage: "", //when set a message it will be displayed, possibly with a network error
    };
  }

  componentDidMount = async () => {
    try {
      console.log(`ASTableModel componentDidMount() has been reached`);

      let assocInBatch = this.props.currentBatch.associates;
      prnt(doPrnt, `assocInBatch A=`, assocInBatch);

      const associateArray: Associate[] = await getAllAssociates();

      //console.log(`ComponentDidMount ${JSON.stringify(associateArray)}`);

      const eligibleAssociateArray = associateArray.filter(function (a) {
        return a.interviewScore >= 70 && a.batch === null;
      });

      // const associatesInBatch=associateArray.filter((a) =>
      // {
      //   if (a.batch === null) return false

      //   return a.interviewScore >= 70 && a.batch.batchId === this.props.currentBatch.batchId
      //   //this.state.currentBatchId
      // });

      //prnt(doPrnt,`assocInBatch B=`,assocInBatch)

      this.setState({
        associates: associateArray,
        eligibleAssociates: eligibleAssociateArray,
        associatesInBatch: assocInBatch,
        associatesLoaded: true,
      });
    } catch (e) {
      this.setState({
        errorObject: e,
        errorMessage: "Could not retrieve all associates",
      });
    }
  };

  render() {
    // prnt(doPrnt,`ASTableModel render() has been reached`)
    // prnt(doPrnt,`this.state.associatesInBatch=`,this.state.associatesInBatch)
    //prnt(doPrnt,`this.props.currentBatch.associates=`,this.props.currentBatch.associates)

    return (
      <Container>
        <ErrorAlert
          error={this.state.errorObject}
          message={this.state.errorMessage}
        />
        <Row>
          <Col>
            <h6>All Available Associates</h6>
            {this.displayTable(
              this.state.eligibleAssociates,
              "No eligible associates left.",
              "Add",
              this.associateAdd
            )}
          </Col>
          <Col>
            <h6>Batch Associates</h6>
            {this.displayTable(
              this.state.associatesInBatch,
              "No associates currently assigned to this batch.",
              "Remove",
              this.associateRemove
            )}
          </Col>
        </Row>
      </Container>
    );
  }

  async patchTheAssoc(assoc: Associate) {
    prnt(doPrnt, `ASTableModel patchTheAssoc() has been reached`);
    prnt(doPrnt, `assoc=`, assoc);

    try {
      await axiosClient.patch("/associates", assoc);
    } catch (e) {
      this.setState({
        errorObject: e,
        errorMessage: "Could not patch associate",
      });
    }
  }

  associateAdd = async (assoc: Associate, i: number) => {
    this.state.associatesInBatch.push(assoc);
    this.state.eligibleAssociates.splice(i, 1);
    assoc.batch = this.props.currentBatch; //await getBatchById(this.state.currentBatchId);
    console.log(assoc.batch);
    console.log(assoc);

    await this.patchTheAssoc(assoc);

    this.setState({});
  };

  associateRemove = async (assoc: Associate, i: number) => {
    this.state.associatesInBatch.splice(i, 1);
    this.state.eligibleAssociates.push(assoc);
    assoc.batch = this.state.eligibleAssociates[0].batch;
    console.log(assoc.batch);
    console.log(assoc);
    await this.patchTheAssoc(assoc);
    this.setState({});
  };

  displayTable = (
    array: Associate[],
    message: String,
    displayText: String,
    itemClick: any
  ) => {
    if (array.length === 0) return <>{message}</>;

    return (
      <div className="associate-table">
        <Table striped>
          <tbody>
            {array.map((obj: any, index: number) => {
              return (
                <tr key={index}>
                  <td>
                    {obj.firstName}, {obj.lastName}, {obj.interviewScore}
                  </td>
                  <td>
                    <Button onClick={() => itemClick(obj, index)}>
                      {displayText}
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  };
}
