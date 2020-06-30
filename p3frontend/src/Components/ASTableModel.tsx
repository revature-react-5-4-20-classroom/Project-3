import React from "react";
import { Table, Button, Container, Row, Col } from "reactstrap";
import {Associate} from "../models/Associate";
import { getAllAssociates } from "../api/Associate";


interface IASTableModelProps {

  currentBatchId: number;

}

interface IASTableModelState {

  
  associates: Associate[];
  eligibleAssociates: Associate[];

  associatesLoaded: boolean;

}

/** Quick reactstrap table that builds a table out of props.objects.  All objects should have the same fields in order.*/

export default class ASTableModel extends React.Component<IASTableModelProps, IASTableModelState> {

  constructor (props: IASTableModelProps) {

    super(props);

    this.state = {

     associates: [],//everybody that comes from the backend
     eligibleAssociates: [],//interview score >70 and no assigned batch yet
     
     associatesLoaded: false
     
    }

  }

     async componentDidMount(){
    
    const associateArray: Associate[] = await getAllAssociates();
    const eligibleAssociateArray=associateArray.filter(function(a) {return a.interviewScore >= 70 && a.batch === null });

    
      this.setState({

      associates: associateArray,
      eligibleAssociates: eligibleAssociateArray,
      
      
      associatesLoaded: true,
      })
    };
  

   updateAssignedBatchId = (obj : any, currentBatchId : number) => {
        //obj.batch.batchId = currentBatchId;
   }

  render() {
    return (
      <Container>
        <Row>
          <Col >
            <h4>All Available Associates</h4>
              <Table striped className="associate-table">
              <tbody>
          
          {
          this.state.eligibleAssociates.map((obj: any, index: number) => {
              return (
                <tr key={index}>
                    
                    <td>{obj.firstName}, {obj.lastName}, {obj.interviewScore}</td>
                    <td><Button onclick={this.updateAssignedBatchId(obj, this.props.currentBatchId)}>Add</Button></td>
              </tr>
            );
          })}
            </tbody>
          </Table>
      </Col>
    </Row>
   </Container> 
    );

  }

}