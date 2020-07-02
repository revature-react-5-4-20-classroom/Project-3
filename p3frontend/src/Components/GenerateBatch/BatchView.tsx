import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { getgeneratedBatch } from "../../api/generateBatch";

export class BatchView extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      show: false,
      response: [],
    };
  }

  getgeneratedBatch = async (e: any) => {
    e.preventDefault();
    console.log(this.props.quantity, this.props.interview);

    this.setState({
      response: await getgeneratedBatch(
        this.props.interview,
        this.props.quantity
      ),
      show: true,
    });
    console.log(this.state.response);
  };
  render() {
    return (
      <Container style={{ backgroundColor: "#fff" }}>
        <Row>
          <Col>
            <h5 onClick={this.getgeneratedBatch}>click</h5>{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            <ul style={{ display: this.state.show ? "block" : "none" }}>
              {this.state.response.map((obj: any, index: number) => {
                return (
                  <li key={obj.associateId}>
                    {obj.firstName} {obj.lastName}
                  </li>
                );
              })}
            </ul>
            {/* <h3> {this.props.batchObj[0].firstName}</h3> */}
          </Col>
        </Row>
      </Container>
    );
  }
}
