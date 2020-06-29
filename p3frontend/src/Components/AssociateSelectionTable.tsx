import React from "react";
import { Container, Row, Col} from "reactstrap";
import { getAllAssociates } from "../api/Associate";
import { toast } from "react-toastify";
import ASTableModel from "./ASTableModel";
import {Associate} from "../models/Associate";



interface IAssociateSelectionTableState {

 

  
  currentBatchId: number;

}

export default class AssociateSelectionTable extends React.Component<any, IAssociateSelectionTableState> {

  constructor(props: any) {

    super(props);

    this.state = {

      

      
      currentBatchId: 64,

    };

  }

  

 
 

  render() {

    return (



      <Container>

        <Row>

          <Col md={{ size: 8 }} width='50%'>

            <h4>All Available Associates</h4>

            <ASTableModel currentBatchId={this.state.currentBatchId} />
            
          </Col>

        </Row>

      </Container>

    );

  }

}