import React from "react";
import { Container, Input, Label, Button, InputGroup } from "reactstrap";
import { getgeneratedBatch } from "../../api/generateBatch";
import { BatchView } from "./BatchView";
import { connect } from "react-redux";
import { allTheMapStateToProps } from "../../redux/reducers";
import { allTheActionMappers } from "../../redux/action-mapper";
import { Associate } from "../../models/Associate";
//new Date().toISOString().substring(0, 10),
interface IOptionAssociatesList{
  associatesList:Associate[],
  quantity:number,
  interview: number,
  flaeeg:boolean,
}

class Options extends React.Component<any, IOptionAssociatesList> {
  constructor(props: any) {
    super(props);
    this.state = {
      quantity: 0,
      interview: 0,
      associatesList: [],
      flaeeg: false,
    };
  }
  bindInputChangeToState = (changeEvent: any) => {
    //@ts-ignore
    this.setState({
      [changeEvent.currentTarget.name]: changeEvent.currentTarget.value,
    });
  };

  // getgeneratedBatch = async (e: any) => {
  //   e.preventDefault();
  //   console.log(this.state.quantity, this.state.interview);

  //   this.setState({
  //     flaeeg: true,
  //   });
  //   // console.log(this.state.response);
  // };

  getgeneratedBatch = async (e: any) => {
    e.preventDefault();
    console.log(this.state.quantity, this.state.interview);

    this.setState({
      associatesList: await getgeneratedBatch(
        this.state.interview,
        this.state.quantity
      ),
      flaeeg: true,
    });
    console.log(this.state.associatesList);
  };

  render() {
    return (
      <Container style={{ backgroundColor: "#C0C0C0" }}>
        <br />
        <h4>Select Associates</h4>
        <br />
        <InputGroup>
          <Label>No of Associates: </Label>
          <Input
            type="number"
            onChange={this.bindInputChangeToState}
            name="quantity"
          ></Input>
        </InputGroup>
        <br />
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
      </Container>
    );
  }
}

export {Options};

const mapStateToProps = (state: IOptionAssociatesList) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = {
  allTheActionMappers,
};
export const ReduxBatchModal = connect(
  allTheMapStateToProps,
  allTheActionMappers
)(Options);

