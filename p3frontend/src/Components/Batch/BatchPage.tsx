import React from "react";
import { Container, Row, Col } from "reactstrap";
import { AssociateList } from "./associateList";
import { UpdateBatch } from "./updateBatch";
import { BatchList } from "./batchList";
import { Options } from "./options";

export class BatchPage extends React.Component<any, any> {
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
            <Col md={3}>
              <Options></Options>
            </Col>
            <Col md={9}>
              <Row>
                <Col md={6}>
                  <AssociateList></AssociateList>
                </Col>
                <Col md={6}>
                  <UpdateBatch></UpdateBatch>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <BatchList></BatchList>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
