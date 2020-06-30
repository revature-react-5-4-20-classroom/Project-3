import React from "react";
import { Container, Input, Label, Button, InputGroup } from "reactstrap";
//new Date().toISOString().substring(0, 10),
export class Options extends React.Component<any, any> {
  constructor(props:any){
    super(props)
    this.state={
      
    }
  }
  bindInputChangeToState = (changeEvent: any) => {
    //@ts-ignore
    this.setState({
      [changeEvent.currentTarget.name]: changeEvent.currentTarget.value,
    });
  };
  generateBatch = () => {};
  render() {
    return (
      <Container style={{ backgroundColor: "#474c55" }}>
        <h4>Options</h4>
        <InputGroup>
          <Label>something:</Label>
          <Input></Input>
          <Button>Submit</Button>
        </InputGroup>
        <InputGroup>
          <Label>Start Date:</Label>
          <Input
            type="date"
            name="startDate"
            id="startDate"
            onChange={this.bindInputChangeToState}
          ></Input>
        </InputGroup>
        <InputGroup>
          <Label>End Date:</Label>
          <Input
            type="date"
            name="endDate"
            id="endDate"
            onChange={this.bindInputChangeToState}
          ></Input>
        </InputGroup>
        <Button onClick={this.generateBatch}> Generate Batches</Button>
      </Container>
    );
  }
}
