import React from 'react';
import { Trainer } from '../models/Trainer';
import {getAllTrainers, getEligibility, createConsentRequest, assignTrainer} from '../api/consent'
import { Form, FormGroup, Label, Col, Input, Button, Toast, ToastHeader, ToastBody, ListGroupItem, ListGroup } from 'reactstrap';
import { Consent } from '../models/Consent';

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

  assign = async(trainer:Trainer, batchId:number) =>{
      assignTrainer(trainer.trainerId, batchId);
  }
  request = async(trainer:Trainer, batchId:number)=>{
      
      createConsentRequest(trainer.trainerId, null, batchId);
  }

  getButton = async(trainer:Trainer, i:number) =>{
    let eligible = await getEligibility(trainer, this.props.batchId);
    if(eligible){
      return <Button color="primary" id={i.toString()} onClick={()=>this.assign(trainer,this.props.batchId)}>Assign</Button>
    }else{
      return <Button color="primary" id={i.toString()} onClick={()=>this.request(trainer,this.props.batchId)}>Request Consent</Button>
    }
  }
  
  getAllTrainers = async (event: any) => {
    let allTrainers : Trainer[] = await getAllTrainers();

    this.setState({
      trainers:allTrainers
    })
  }

  render() {
    return (
      <>
      <ListGroup>
              {this.state.trainers.map((trainer: Trainer, i) => {
                  //trying to use the same item display everywhere
                  return( 
                  <ListGroupItem key={i}>
                    
                          {trainer.firstName + ' ' + trainer.lastName}
                          
                          {this.getButton(trainer,i)}
                  </ListGroupItem>)

              })}
          </ListGroup></>
    );
  }

}