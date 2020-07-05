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

import { getAllBatches } from "../../api/batch";
import { Batch } from "../../models/Batch";
import { Associate } from "../../models/Associate";
import { getgeneratedBatch } from "../../api/generateBatch";

import { getAllAssociates } from "../../api/Associate";

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

export class BatchPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      // currentBatch:,
      batches: [],
      notConfirmedBatches: [],
      batchFlag: false,
      quantity: 0,
      interview: 0,
      associatesList: [],
      flaeeg: false,
      assoiates: false,
      // batches: [],
      currentBatch1: null,
      data: false,

      associates: [],
      eligibleAssociates: [],
      associatesInBatch: [],
      associatesLoaded: false,
      errorObject: null,
      errorMessage: "",
    };
  }
  componentDidMount = async () => {
    const associateArray: Associate[] = await getAllAssociates();
    const eligibleAssociateArray = associateArray.filter(function (a) {
      return a.interviewScore >= 70 && a.batch === null;
    });
    this.setState({
      batches: await getAllBatches(),
      batchFlag: true,
      associates: associateArray,
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

    console.log("fsekghseg", this.state.batches);
  };
  bindInputChangeToState = (changeEvent: any) => {
    //@ts-ignore
    this.setState({
      [changeEvent.currentTarget.name]: changeEvent.currentTarget.value,
    });
  };

  getgeneratedBatch = async (e: any) => {
    e.preventDefault();
    console.log(this.state.quantity, this.state.interview);

    this.setState({
      associatesList: await getgeneratedBatch(
        this.state.interview,
        this.state.quantity
      ),
      flaeeg: true,
    });
    // console.log(this.state.associatesList);
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
  associateRemove = async (assoc: Associate, i: number) => {
    this.state.associatesInBatch.splice(i, 1);
    this.state.eligibleAssociates.push(assoc);
    assoc.batch = this.state.eligibleAssociates[0].batch;
    console.log(assoc.batch);
    console.log(assoc);
    // await this.patchTheAssoc(assoc);
    this.setState({});
  };

  associateAdd2 = async (assoc: Associate, i: number) => {
    this.state.associatesInBatch.push(assoc);
    this.state.associatesList.splice(i, 1);
    assoc.batch = this.props.currentBatch; //await getBatchById(this.state.currentBatchId);
    console.log(assoc.batch);
    console.log(assoc);

    // await this.patchTheAssoc(assoc);

    this.setState({});
  };

  associateAdd = async (assoc: Associate, i: number) => {
    this.state.associatesInBatch.push(assoc);
    this.state.eligibleAssociates.splice(i, 1);
    assoc.batch = this.props.currentBatch; //await getBatchById(this.state.currentBatchId);
    console.log(assoc.batch);
    console.log(assoc);

    // await this.patchTheAssoc(assoc);

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
                              {/* <ErrorAlert
                                error={this.state.errorObject}
                                message={this.state.errorMessage}
                              /> */}
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
                                  {/* <ul >
                                {/* style={{ display: this.state.show ? "block" : "none" }} 
                                  {this.props.assciates.map((obj: any, index: number) => {
                                    return (
                                      <li key={obj.associateId}>
                                        {obj.firstName}, {obj.lastName}, {obj.interviewScore}
                                      </li>
                                    );
                                  })}
                                </ul> */}

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
                                  {/* <h3> {this.props.batchObj[0].firstName}</h3> */}
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
          </Row>
        </Container>
      </>
    );
  }

  confirmBatch = (e: any) => {
    e.preventDefault();
    // patch request to batch
    //for loop to patch all associates assigned to batch
  };
}
