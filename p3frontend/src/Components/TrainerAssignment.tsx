import React from 'react';
import { Trainer } from '../models/Trainer';
<<<<<<< HEAD
import {getAllTrainers, getEligibility, createConsentRequest, assignTrainer} from '../api/consent'
import { Form, FormGroup, Label, Col, Input, Button, Toast, ToastHeader, ToastBody, ListGroupItem, ListGroup, Row } from 'reactstrap';
=======
import {getAllTrainers, getEligibility, createConsentRequest} from '../api/consent'
import { Form, FormGroup, Label, Col, Input, Button, Toast, ToastHeader, ToastBody, ListGroupItem, ListGroup } from 'reactstrap';
>>>>>>> bf33ff1f264bb3747d5f603a02ea87c4eb323785
import { Consent } from '../models/Consent';
import { assignTrainer } from '../api/batch';

interface IAssignmentComponentState { 
  trainers : Trainer[]
}

export class TrainerAssignmentComponent extends React.Component<any, IAssignmentComponentState> {

    

  constructor(props: any) {
    super(props);
    this.state = {
      trainers: []
    }
  }
  componentDidMount(){
     this.getAllTrainers();
    
  }

  assign = async(trainer:Trainer, batchId:number) =>{
      await assignTrainer(trainer.trainerId, batchId);
  }
  request = async(trainer:Trainer, batchId:number)=>{
      
      await createConsentRequest(trainer.trainerId, null, batchId);
  }

  getButton = (trainer:Trainer, i:number) =>{
    
    let jsxElement =(<><h4>test</h4></>);
    if(trainer.isEligible){
      jsxElement =  (<Button color="primary" id={i.toString()} onClick={()=>this.assign(trainer, 1)}>Assign</Button>)
    }else{
      jsxElement = (<Button color="primary" id={i.toString()} onClick={()=>this.request(this.state.trainers[1], 1)}>Request Consent</Button>)
    }
    console.log(jsxElement)
    return jsxElement;
  }
  
  getAllTrainers = async () => {
    let allTrainers : Trainer[] = await getAllTrainers();
    allTrainers.forEach(async (trainer)=>{
      let isEligible: boolean = await getEligibility(trainer, 1)
      trainer.isEligible = isEligible;
    } );
    
    console.log(allTrainers);
    this.setState({
      trainers:allTrainers
    })
  }

  render() {
    return (
      <>
      <ListGroup>
              {  this.state.trainers.map( (trainer: Trainer, i) => {
                  //trying to use the same item display everywhere
                  return( 
                  <ListGroupItem key={i}>

                          <Row> 
                          
                          <Col>
                            <Row>
                              <Col>
                              {trainer.firstName + ' ' + trainer.lastName}
                              </Col>
                              
                            </Row> 
                            <Row>
                              <Col>
                              { this.getButton(trainer,i)}
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                  
                  </ListGroupItem>)

              })}
          </ListGroup></>
    );
  }

}