import React from "react";
import { Container, Input, Label, Button, InputGroup } from "reactstrap";
import { getgeneratedBatch } from "../../api/generateBatch";
import { BatchView } from "./BatchView";
//new Date().toISOString().substring(0, 10),
export class Options extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      quantity: 0,
      interview: 0,
      response: "any",
      flaeeg: false,
    };
  }
  bindInputChangeToState = (changeEvent: any) => {
    //@ts-ignore
    this.setState({
      [changeEvent.currentTarget.name]: changeEvent.currentTarget.value,
    });
  };

  getgeneratedBatch = async (e: any) => {
    e.preventDefault();
    console.log(this.state.quantity, this.state.interview);

    this.setState({
      flaeeg: true,
    });
    // console.log(this.state.response);
  };
  render() {
    return (
      <Container style={{ backgroundColor: "#474c55" }}>
        <h4>Options</h4>
        <InputGroup>
          <Label>something: </Label>
          <Input></Input>
          <Button>Submit</Button>
        </InputGroup>
        <br />
        <InputGroup>
          <Label>Start Date: </Label>
          <Input
            type="date"
            name="startDate"
            id="startDate"
            onChange={this.bindInputChangeToState}
          ></Input>
        </InputGroup>
        <br />
        <InputGroup>
          <Label>End Date: </Label>
          <Input
            type="date"
            name="endDate"
            id="endDate"
            onChange={this.bindInputChangeToState}
          ></Input>
        </InputGroup>
        <br />
        <InputGroup>
          <Label>No of Associates: </Label>
          <Input
            type="number"
            onChange={this.bindInputChangeToState}
            name="quantity"
          ></Input>
        </InputGroup>
        <InputGroup>
          <Label>Interview Score limit: </Label>
          <Input
            type="number"
            onChange={this.bindInputChangeToState}
            name="interview"
          ></Input>
        </InputGroup>
        <br />
        <Button onClick={this.getgeneratedBatch}> Generate Batches</Button>
        <br />
        <div style={{ display: this.state.flaeeg ? "block" : "none" }}>
          {" "}
          <h4>fsengjn;a</h4>
          <BatchView
            quantity={this.state.quantity}
            interview={this.state.interview}
          ></BatchView>
        </div>
        <h3>kawhi</h3>
      </Container>
    );
  }
}
