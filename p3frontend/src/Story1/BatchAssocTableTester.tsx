import React from "react";
import { getBatchById } from "../api/batch";

export class BatchTableTester extends React.Component<any, any> {
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
        {/* <BatchAssocTable currentBatch={this.state.aBatch} parentTop={this}/> */}
        {/* <BatchTrainersTableRedux
          currentBatch={this.state.aBatch}
          parentTop={this}
        /> */}
      </>
    );
  }
}
