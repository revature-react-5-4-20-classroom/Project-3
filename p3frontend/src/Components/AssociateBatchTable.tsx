import React from "react";
import { Container, Row, Col } from "reactstrap";
import ABTableModel from "./ABTableModel";
import {Associate} from "../models/Associate";

interface IAssociateBatchTableState {

  associates: Associate[];
  associatesLoaded: boolean;
  currentBatchId: number,

 }

export default class AssociateBatchTable extends React.Component<any, IAssociateBatchTableState> {

  constructor(props: any) {

    super(props);

    this.state = {
      associates: [],
      associatesLoaded: false,
      currentBatchId: 64,

    };

  }

  render() {

    return (

      <Container>

        <Row>

          <Col md={{ size: 8 }} width='50%'>

            <h4>Potential Batch Associates</h4>

            <ABTableModel currentBatchId={this.state.currentBatchId} />

          </Col>

        </Row>

      </Container>

    );

  }

}