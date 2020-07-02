import React from "react";
import ASTableModel from "./ASTableModel";
import { getBatchById } from "../api/batch";
import { prnt } from "../GeneralPurposeHelpers/Prnt";

export class TestASTableModel extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      aBatch: null,
    };
  }

  async componentDidMount() {
    let ab = await getBatchById(1);

    //prnt(true,`TestASTableModel componentDidMount() ab=`,ab)

    this.setState({
      aBatch: ab,
    });
  }

  render() {
    return (
      <>
        {/* aBatch={JSON.stringify(this.state.aBatch)}<br/> */}
        <ASTableModel currentBatch={this.state.aBatch} />
      </>
    );
  }
}
