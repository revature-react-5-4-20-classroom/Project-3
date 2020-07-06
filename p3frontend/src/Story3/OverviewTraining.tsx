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
} from "reactstrap";

import { getAllBatches, updateBatch } from "../api/batch";
import { Batch } from "../models/Batch";
import { Associate } from "../models/Associate";
import { getgeneratedBatch } from "../api/generateBatch";
import { getAllAssociates, updateAssociate } from "../api/Associate";
import { ErrorAlert } from "../GeneralPurposeHelpers/ErrorAlert";

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
      batches: [],
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
      allEligibleAssociates: [],
    };
  }
  componentDidMount = async () => {
    const associateArray: any[] = await getAllAssociates();
    const eligibleAssociateArray = associateArray.filter(function (assoc) {
      return assoc.interviewScore >= 70 && assoc.batch == null;
    });
    this.setState({
      batches: await getAllBatches(),
      batchFlag: true,
      associates: associateArray,
      allEligibleAssociates: eligibleAssociateArray,
      eligibleAssociates: eligibleAssociateArray,

      associatesLoaded: true,
    });
    const tempBatchses = [];
    for (const batch of this.state.batches) {
      if (!batch.isConfirmed) {
        tempBatchses.push(batch);
      }
    }
    this.setState({
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
  batchData = (e: any) => {
    // e.preventDefault();
    this.setState({
      associatesList: [],
      associatesInBatch: e.associates,
      quantity: 0,
      interview: 0,
      currentBatch1: e,
      data: true,
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
  render() {
    return (
      <>
        <Container>
          <Row>
            <Container style={{ backgroundColor: "#f26925" }}>
              <h3>Generate Batch</h3>
            </Container>
          </Row>
          <Row>
            <Col md={4}>
              <Container style={{ backgroundColor: "#C0C0C0" }}>
                <br />
                <h4>Select Associates</h4>
                <br />
                <InputGroup>
                  <Label>No of Associates: </Label>
                  <Input
                    type="number"
                    value={this.state.quantity}
                    onChange={this.bindInputChangeToState}
                    name="quantity"
                  ></Input>
                </InputGroup>
                <br />
                <InputGroup>
                  <Label>Interview Score limit: </Label>
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
              <Row></Row>
              <Row>
                <Col md={12}>
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
                      <br />
                      <Row style={{ backgroundColor: "#474c55" }}>
                        <Col>
                          <h3>Possible Batches</h3>
                          <Nav tabs>
                            {this.state.notConfirmedBatches.map(
                              (obj: any, index: number) => {
                                return (
                                  <NavItem>
                                    <NavLink
                                      href="#"
                                      onClick={(e) => {
                                        this.batchData(obj);
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
                            <Container
                              style={{ backgroundColor: "#fff" }}
                              className="associate-table"
                            >
                              <Row>
                                <Col>
                                  <h5>
                                    Batch Id: {this.state.currentBatch1.batchId}
                                  </h5>
                                  <h5>
                                    Program Type:{" "}
                                    {this.state.currentBatch1.programmType}
                                  </h5>
                                  <h5>
                                    Batch Location:{" "}
                                    {
                                      this.state.currentBatch1.location
                                        .locationName
                                    }
                                  </h5>
                                  <h5>
                                    Technologies:{" "}
                                    {
                                      this.state.currentBatch1.curriculum
                                        .curriculumSkillset.skillSetName
                                    }
                                  </h5>
                                  <hr />
                                  <h5>Associates</h5>
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
                </Col>
              </Row>
            </Col>
          </Row>{" "}
          <Row>
            <Button onClick={this.confirmBatch}>Confirm</Button>
            <ErrorAlert
              error={this.state.errorObject}
              message={this.state.errorMessage}
            />
          </Row>
        </Container>
      </>
    );
  }

  confirmBatch = async (e: any) => {
    e.preventDefault();
    if (this.state.currentBatch1) {
      try {
        for (const i of this.state.associatesInBatch) {
          i.batchId = this.state.currentBatch1.batchId;
          await updateAssociate(i);
          // console.log(i);
        }
        const newBatch = await updateBatch(this.state.currentBatch1.batchId, true);
        // this.props.batchUpdateActionMapper(newBatch);
      } catch (e) {
        // console.log("Confirm click failed", e.message);
        this.setState({
          errorObject: e,
          errorMessage: "Could not patch associate",
        });
      }
    } else {
      // alert("No batch selected. Confirm click failed");
      this.setState({
        errorObject: e,
        errorMessage: "Could not patch associate",
      });
    }
  };
}
