import React from "react";
import BatchAssocTable from "./BatchAssocTable";
import { getBatchById } from "../api/batch";
import { prnt } from "../GeneralPurposeHelpers/Prnt";

export class BatchAssocTableTester extends React.Component<any, any> {
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
        <BatchAssocTable currentBatch={this.state.aBatch} parentTop={this}/>
      </>
    );
  }
}
