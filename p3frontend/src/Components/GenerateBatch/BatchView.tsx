import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { getgeneratedBatch } from "../../api/generateBatch";
import { connect } from "react-redux";
import { allTheMapStateToProps } from "../../redux/reducers";
import { allTheActionMappers } from "../../redux/action-mapper";
import { Associate } from "../../models/Associate";

export class BatchView extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      show: false,
      response: [],
    };
  }
 

  render() {
    return (
      <Container style={{ backgroundColor: "#fff" }} className="associate-table">
        <Row>
          <Col>
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

            {/* {this.props.assciates.map((obj: any, index: number) => {
              return (
                <tr key={obj.associateId}>
                  <td>
                    {obj.firstName}, {obj.lastName}, {obj.interviewScore}
                  </td>
                  <td>
                    <Button
                      onClick={() => this.associateAdd(obj, index)}>
                      add
                    </Button>
                  </td>
                </tr>
              ); 
            })}*/}
            {/* <h3> {this.props.batchObj[0].firstName}</h3> */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export const ReduxBatchModal = connect(
  allTheMapStateToProps,
  allTheActionMappers
)(BatchView);
