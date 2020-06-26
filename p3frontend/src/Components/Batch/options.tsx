import React from "react";
import { Container, Input, Label, Button } from "reactstrap";

export class Options extends React.Component<any, any> {
  render() {
    return (
      <Container style={{ backgroundColor: "#474c55" }}>
        <h4>Options</h4>
        <Label>something:</Label>
        <Input></Input>
        <Button>Submit</Button>
        <br />
        <br />
        <Button>Generate Batches</Button>
      </Container>
    );
  }
}
