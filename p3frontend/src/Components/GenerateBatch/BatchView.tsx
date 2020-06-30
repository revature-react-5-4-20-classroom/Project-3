import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

export class BatchView extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      show: false,
    };
  }
 
  render() {
    return (
      <Container style={{ backgroundColor: "#fff" }}>
        <Row>
          <Col>
            <h5
              onClick={(e) => {
                this.setState({ show: true });
              }}
            >
              {this.props.batchObj.curriculum.name}
            </h5>{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            <ul style={{ display: this.state.show ? "block" : "none" }}>
              {this.props.batchObj.associates.map((obj: any, index: number) => {
                return (
                  <li key={obj.batchId}>
                    {obj.firstName} {obj.lastName}
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}
