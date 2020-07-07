import React from "react";
import {
  Container,
  Row,
  Col,
  Spinner,
  InputGroup,
  Label,
  Input,
  Button,
  NavItem,
  Nav,
  NavLink,
  Table,
  Alert,
} from "reactstrap";

import { getAllBatches, updateBatch } from "../api/batch";
import { Batch } from "../models/Batch";
import { Associate } from "../models/Associate";
import { getgeneratedBatch } from "../api/generateBatch";
import {
  getAllAssociates,
  updateAssociate,
  getActiveAssociates,
} from "../api/Associate";
import { ErrorAlert } from "../GeneralPurposeHelpers/ErrorAlert";
import { PageTitleBar } from "../Components/GenerateBatch/PageTitleBar";
import "./overviewtraining.css";
interface IBatchPageState {
  // currentBatch: Batch,
  batches: Batch[];
  notConfirmedBatches: Batch[];
  batchFlag: boolean;
  associatesList: Associate[];
  quantity: number;
  interview: number;
  flaeeg: boolean;
  assoiates: boolean;
  // batches: [],
  currentBatch1: Batch;
  data: boolean;
}

export class OverviewTraining extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      // batches: [],
      notConfirmedBatches: [],
      batchFlag: false,
      quantity: 0,
      interview: 0,
      associatesList: [],
      flaeeg: false,
      assoiates: false,
      currentBatch1: null,
      data: false,
      associates: [],
      eligibleAssociates: [],
      associatesInBatch: [],
      associatesLoaded: false,
      errorObject: null,
      errorMessage: "",
      currentBatchIndex: undefined,
      allEligibleAssociates: [],
    };
  }
  componentDidMount = async () => {
    const associateArray: any[] = await getActiveAssociates();
    // console.log(associateArray);
    const batches = await getAllBatches();
    const eligibleAssociateArray = associateArray.filter(function (assoc) {
      return assoc.interviewScore >= 70 && assoc.batch == null;
    });
    const tempBatchses = [];
    for (const batch of batches) {
      if (!batch.isConfirmed) {
        tempBatchses.push(batch);
      }
    }
    this.setState({
      batchFlag: true,
      associates: associateArray,
      allEligibleAssociates: eligibleAssociateArray,
      eligibleAssociates: eligibleAssociateArray,
      associatesLoaded: true,
      notConfirmedBatches: tempBatchses,
    });
  };
  
  bindInputChangeToState = (changeEvent: any) => {
    //@ts-ignore
    this.setState({
      [changeEvent.currentTarget.name]: changeEvent.currentTarget.value,
    });
  };

  getgeneratedBatch = async (e: any) => {
    e.preventDefault();
    this.setState({
      associatesList: await getgeneratedBatch(
        this.state.interview,
        this.state.quantity
      ),
      eligibleAssociates: this.state.allEligibleAssociates,
      flaeeg: true,
    });

    const newArray = this.state.eligibleAssociates.filter((item: any) => {
      return (
        this.state.associatesList.filter(function (item2: any) {
          return item.associateId == item2.associateId;
        }).length == 0
      );
    });
    this.setState({
      eligibleAssociates: newArray,
    });
  };

  batchData = (e: any, i: number) => {
    // e.preventDefault();
    this.setState({
      associatesList: [],
      associatesInBatch: e.associates,
      quantity: 0,
      interview: 0,
      currentBatch1: e,
      data: true,
      currentBatchIndex: i,
      eligibleAssociates: this.state.allEligibleAssociates,
    });
  };

  displayTable = (
    array: Associate[],
    message: String,
    displayText: String,
    itemClick: any
  ) => {
    if (array.length === 0) return <>{message}</>;

    return (
      <div className="table">
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

  associateRemove = async (assoc: any, i: number) => {
    this.state.associatesInBatch.splice(i, 1);
    this.state.eligibleAssociates.push(assoc);
    assoc.batch = this.state.eligibleAssociates[0].batch;
    this.setState({});
  };

  associateAdd2 = async (assoc: any, i: number) => {
    this.state.associatesInBatch.push(assoc);
    this.state.associatesList.splice(i, 1);
    assoc.batch = this.props.currentBatch;
    this.setState({});
  };

  associateAdd = async (assoc: any, i: number) => {
    this.state.associatesInBatch.push(assoc);
    this.state.eligibleAssociates.splice(i, 1);
    assoc.batch = this.props.currentBatch;
    this.setState({});
  };
  
  confirmBatch = async (e: any) => {
    e.preventDefault();

    try {
      for (const i of this.state.associatesInBatch) {
        i.batchId = this.state.currentBatch1.batchId;
        await updateAssociate(i);
        // console.log(i);
      }
      const newBatch = await updateBatch(
        this.state.currentBatch1.batchId,
        true
      );
      this.state.notConfirmedBatches.splice(this.state.currentBatchIndex, 1);
      console.log(this.state.notConfirmedBatches);
      this.setState({});
      // this.props.batchUpdateActionMapper(newBatch);
    } catch (e) {
      this.setState({
        errorObject: e,
        errorMessage: "Could not patch associate",
      });
    }
  };

  render() {
    return (
      <>
        <Container>
          <PageTitleBar pageTitle={"Training Overview"} />
          <Alert color="success">This is a success alert — check it out!</Alert>
          <Row>
            <Col md={3}>
              <Container style={{ backgroundColor: "#C0C0C0" }}>
                <br />
                <h4>Select Associates</h4>
                <br />
                <InputGroup>
                  <Label>No. of Associates: </Label>
                  <Input
                    type="number"
                    value={this.state.quantity}
                    onChange={this.bindInputChangeToState}
                    name="quantity"
                  ></Input>
                </InputGroup>
                <br />
                <InputGroup>
                  <Label>Interview Score Limit: </Label>
                  <Input
                    type="number"
                    value={this.state.interview}
                    onChange={this.bindInputChangeToState}
                    name="interview"
                  ></Input>
                </InputGroup>
                <br />
                <Button
                  onClick={this.getgeneratedBatch}
                  disabled={!this.state.data}
                >
                  {" "}
                  Generate Batch
                </Button>
                <br />
              </Container>
            </Col>
            <Col md={8}>
              {this.state.batchFlag ? (
                <Container>
                  <Row>
                    <Col>
                      {this.state.data ? (
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
                      ) : (
                        <></>
                      )}
                    </Col>
                  </Row>

                  <Row style={{ backgroundColor: "#474c55", color: "#fff" }}>
                    <Col>
                      <h4>Possible Batches</h4>
                      <Nav pills>
                        {this.state.notConfirmedBatches.map(
                          (obj: any, index: number) => {
                            return (
                              <NavItem>
                                <NavLink
                                  style={{ color: "#fff" }}
                                  href="#"
                                  onClick={(e) => {
                                    this.batchData(obj, index);
                                  }}
                                >
                                  {obj.batchId}
                                </NavLink>
                              </NavItem>
                            );
                          }
                        )}
                      </Nav>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      {this.state.data ? (
                        <Container className="table">
                          <Row>
                            <Col>
                              <h6>
                                Batch Id: {this.state.currentBatch1.batchId}
                              </h6>
                              <h6>
                                Program Type:{" "}
                                {this.state.currentBatch1.programmType}
                              </h6>
                              <h6>
                                Batch Location:{" "}
                                {this.state.currentBatch1.location.locationName}
                              </h6>
                              <h6>
                                Technologies:{" "}
                                {
                                  this.state.currentBatch1.curriculum
                                    .curriculumSkillset.skillSetName
                                }
                              </h6>
                              <hr />
                              <h6>Associates</h6>
                              {this.state.associatesList.map(
                                (obj: any, index: number) => {
                                  return (
                                    <tr key={obj.associateId}>
                                      <td>
                                        {obj.firstName}, {obj.lastName},{" "}
                                        {obj.interviewScore}
                                      </td>
                                      <td>
                                        <Button
                                          onClick={() =>
                                            this.associateAdd2(obj, index)
                                          }
                                        >
                                          add
                                        </Button>
                                      </td>
                                    </tr>
                                  );
                                }
                              )}
                            </Col>
                          </Row>
                        </Container>
                      ) : (
                        <></>
                      )}
                    </Col>
                  </Row>
                </Container>
              ) : (
                <Spinner></Spinner>
              )}{" "}
            </Col>{" "}
            {/* <Row style={{float:"right"}}>
         
          </Row> */}
            <Col md={1}>
              <Button onClick={this.confirmBatch} disabled={!this.state.data}>
                Confirm
              </Button>
              <ErrorAlert
                error={this.state.errorObject}
                message={this.state.errorMessage}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
