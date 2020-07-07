import React from "react";
import { Container, Row, Col } from "reactstrap";
// import { AssociateList } from "./associateList";
// import { UpdateBatch } from "./updateBatch";
// import { BatchList } from "./batchList";
import { Options } from "./options";
import { PageTitleBar } from "./PageTitleBar";

export class BatchPage extends React.Component<any, any> {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Container>
              <PageTitleBar pageTitle={"Generate Batch"} />
            </Container>
          </Row>
          <Row>
            <Col md={4} id="gen-batch-options-menu">
              <Options></Options>
            </Col>
            <Col md={8}>
              <Row>
                <Col md={6}>
                  {/* <AssociateList></AssociateList> */}
                </Col>
                <Col md={6}>
                  {/* <UpdateBatch></UpdateBatch> */}
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  {/* <BatchList></BatchList> */}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
