import React from "react";
import { Container, Row, Col, Spinner } from "reactstrap";
import AssociateList from "./associateList";
import UpdateBatch from "./updateBatch";
import { BatchList } from "./batchList";
import { Options } from "./options";
import { allTheActionMappers } from "../../redux/action-mapper";
import { allTheMapStateToProps } from "../../redux/reducers";
import { connect } from "react-redux";
import { getAllBatches } from "../../api/batch";
import { Batch } from "../../models/Batch";


interface IBatchPageState{
  // currentBatch: Batch,
  batches: Batch[],
  notConfirmedBatches: Batch[],
  batchFlag: boolean,
}



export class BatchPage extends React.Component<any, IBatchPageState> {
  constructor(props: any) {
    super(props);
    this.state = {
      // currentBatch:,
      batches: [],
      notConfirmedBatches: [],
      batchFlag: false,
    };
  }
  componentDidMount = async () => {
    this.setState({
      batches: await getAllBatches(),
      batchFlag: true,
    });
    const tempBatchses = [];
    for (const batch of this.state.batches) {
      if (!batch.isConfirmed) {
        tempBatchses.push(batch);
      }
    }
    this.setState({
      notConfirmedBatches:tempBatchses,
    })

    console.log("fsekghseg", this.state.batches);
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
              <Options></Options>
            </Col>
            <Col md={8}>
              <Row>
                {/* {this.state.currentBatch ?
              (
                <Col md={6}>
                  <AssociateList currentBatch={this.state.currentBatch} ></AssociateList>
                </Col>
                <Col md={6}>
                  <UpdateBatch></UpdateBatch>
                </Col>
              ):<></>
              \}*/}
              </Row>
              <Row>
                <Col md={12}>
                  {this.state.batchFlag ? (
                    <BatchList
                      batches={this.state.notConfirmedBatches}
                    ></BatchList>
                  ) : (
                    <Spinner></Spinner>
                  )}{" "}
                </Col>
              </Row>
            </Col>
          </Row>{" "}
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state: IBatchPageState) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = {
  allTheActionMappers,
};


export const ReduxInProgress = connect(
  allTheMapStateToProps,
  allTheActionMappers
)(BatchPage);
