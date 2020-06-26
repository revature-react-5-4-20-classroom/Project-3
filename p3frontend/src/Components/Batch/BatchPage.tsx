import React from "react";
import { Container, Row, Col } from "reactstrap";
import { AssociateList } from "./associateList";
import { UpdateBatch } from "./updateBatch";
import { BatchList } from "./batchList";

export class BatchPage extends React.Component<any, any> {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <AssociateList></AssociateList>
            </Col>
            <Col>
              <Row>
                <Col>
                  <UpdateBatch></UpdateBatch>
                </Col>
                <Col>
                  <UpdateBatch></UpdateBatch>
                </Col>

              </Row>
              <Row>
                  <BatchList></BatchList>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
