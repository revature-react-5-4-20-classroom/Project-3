import React from 'react';
import { Trainer } from '../models/Trainer';
import { Form, FormGroup, Label, Col, Input, Button, Toast, ToastHeader, ToastBody } from 'reactstrap';

interface IAssignmentComponentState { 
  trainerId:number;
  batchId:number;
  isError: boolean;
  errorMessage: string;
}

export class TrainerAssignmentComponent extends React.Component<any, IAssignmentComponentState> {

    //I do not know what state/props this will have access to, I only wrote the bare minimum functionality. Someone else will insert what is needed to make it work. 

  constructor(props: any) {
    super(props);
    this.state = {
      trainerId: 0,
      batchId: 0,
      isError: false,
      errorMessage: '',
    }
  }
  setTrainer = (un: any) => {
    this.setState({
      trainerId: un.currentTarget.value,
    })
  }
  setBatch = (un: any) => {
    this.setState({
      batchId: un.currentTarget.value,
    })
  }
  clearError = () => {
    this.setState({
      errorMessage: '',
      isError: false,
    })
  }
  attemptPatch = async (event: any) => {
    event.preventDefault();
    console.log(event);
    try {
      //Assignment endpoint from API go here
      alert("Trainer assigned successfully")
    } catch (error) {
      this.setState({
        isError: true,
        errorMessage: error.message,
      })
    }
  }

  render() {
    return (
      <div>
      <Form onSubmit={this.attemptPatch}>
        <h4>This is for assigning a Trainer to a Batch</h4>
        <FormGroup row>
            <Label for="ID" sm={8}>Enter Trainer ID</Label>
            <Col sm={6}>
                {/* onChange lets Input change state, value lets Input display state */}
                 <Input onChange={this.setTrainer} value={this.state.trainerId} type="number" name="ID" id="id" placeholder="name"/>
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label for="ID" sm={8}>Enter Batch ID</Label>
            <Col sm={6}>
                {/* onChange lets Input change state, value lets Input display state */}
                 <Input onChange={this.setBatch} value={this.state.batchId} type="number" name="ID" id="id" placeholder="name"/>
            </Col>
        </FormGroup>
        <Button color="info">Submit</Button>
      </Form>
      <Toast isOpen={this.state.isError}>
        <ToastHeader icon="danger" toggle={this.clearError}>
          Error!
        </ToastHeader>
        <ToastBody>
          {this.state.errorMessage}
        </ToastBody>
      </Toast>
      </div>
    );
  }

}