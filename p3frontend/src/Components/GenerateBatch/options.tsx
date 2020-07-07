import React from "react";
import { Input, Label, Button, InputGroup, InputGroupText } from "reactstrap";
// import { BatchView } from "./BatchView";
import {
  smallBtnStyles,
  sharpEdge,
  btnStyles,
} from "../../Styles/generateBatchStlyes";
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
  };
  render() {
    return (
      <div id="options-div">
        <h4 style={{ color: "white", fontSize: "1.2rem" }}>Options</h4>
        <InputGroup>
          {/* <Label>something: </Label> */}
          <Input placeholder="something (text)"></Input>
          <Button style={smallBtnStyles}>Submit</Button>
        </InputGroup>
        <br />

        <InputGroup>
          <Input
            type="date"
            name="startDate"
            id="startDate"
            onChange={this.bindInputChangeToState}
          ></Input>
          <InputGroupText style={sharpEdge}>
            <Label>Start Date</Label>
          </InputGroupText>
        </InputGroup>
        <br />

        <InputGroup>
          <Input
            type="date"
            name="endDate"
            id="endDate"
            onChange={this.bindInputChangeToState}
          ></Input>
          <InputGroupText style={sharpEdge}>
            <Label>End Date</Label>
          </InputGroupText>
        </InputGroup>
        <br />
        <InputGroup>
          <Input
            type="number"
            onChange={this.bindInputChangeToState}
            name="quantity"
            placeholder="No. of Associates"
          ></Input>
        </InputGroup>
        <br />
        <InputGroup>
          <Input
            type="number"
            onChange={this.bindInputChangeToState}
            name="interview"
            placeholder="Interview Score Limit"
          ></Input>
        </InputGroup>
        <br />
        <Button onClick={this.getgeneratedBatch} style={btnStyles}>
          {" "}
          Generate Batches
        </Button>
        <br />
        <div style={{ display: this.state.flaeeg ? "block" : "none" }}>
          {" "}
          <h4>fsengjn;a</h4>
          {/* <BatchView
            quantity={this.state.quantity}
            interview={this.state.interview}
          ></BatchView> */}
        </div>
      </div>
    );
  }
}
