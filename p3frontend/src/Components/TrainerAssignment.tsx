import React from 'react';
import { Trainer } from '../models/Trainer';
import {getAllTrainers, getAllEligibleTrainers, createConsentRequest} from '../api/consent'
import { Form, FormGroup, Label, Col, Input, Button, Toast, ToastHeader, ToastBody, ListGroupItem, ListGroup, Row } from 'reactstrap';
import { Consent } from '../models/Consent';
import { assignTrainer } from '../api/batch';

interface IAssignmentComponentState { 
  trainers : Trainer[]
  eligibleTrainers: Trainer[];

}

export class TrainerAssignmentComponent extends React.Component<any, IAssignmentComponentState> {

    

  constructor(props: any) {
    super(props);
    this.state = {
      trainers: [],
      eligibleTrainers: []
    }
  }
  componentDidMount(){
     this.getAllTrainers();
     this.getAllEligibleTrainers(20);
     this.assignEligibility();
    
  }

  assign = async(trainerId:number, batchId:number) =>{
      await assignTrainer(trainerId, 20);
  }
  request = async(trainerId:number, batchId:number)=>{
      
      await createConsentRequest(trainerId, null, 20);
  }

  getButton = (trainer:Trainer, i:number) =>{
    
    let jsxElement =(<><h4>test</h4></>);
    if(trainer.isEligible){
      jsxElement =  (<Button color="primary" id={i.toString()} onClick={()=>this.assign(this.state.trainers[0].trainerId, 20)}>Assign</Button>)
    }else{
      jsxElement = (<Button color="primary" id={i.toString()} onClick={()=>this.request(this.state.trainers[0].trainerId, 20)}>Request Consent</Button>)
    }
    console.log(jsxElement)
    return jsxElement;
  }
  
  getAllTrainers = async () => {
    let allTrainers : Trainer[] = await getAllTrainers();
    console.log(allTrainers);
    this.setState({
      trainers:allTrainers
    })
  }
  getAllEligibleTrainers = async(batchId:number) => {
    let trainers : Trainer[] = await getAllEligibleTrainers(batchId);
    this.setState({
      eligibleTrainers:trainers
    })
  }

  assignEligibility = () =>{
    let allTrainers = this.state.trainers;
    let allEligible = this.state.eligibleTrainers;
    allTrainers.forEach(trainer =>{
      if(allEligible.includes(trainer)){
        trainer.isEligible = true;
      } else{
        trainer.isEligible = false;
      }
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