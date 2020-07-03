import React from "react";
import { Button } from "reactstrap";
import { Batch } from "../models/Batch";
import { updateBatch } from "../api/batch";
import { IState, allTheMapStateToProps } from "../redux/reducers";
import {
  batchUpdateActionMapper,
  batchClickActionMapper,
} from "../redux/action-mapper";
import { connect } from "react-redux";

interface IConfirmBatchButtonProps {
  batch: Batch | null;
  batchUpdateActionMapper: (batch: Batch) => void;
  batchClickActionMapper: (batch: Batch) => void;
}

class ConfirmBatchButton extends React.Component<
  IConfirmBatchButtonProps,
  any
> {
  // Adding a constructor did not help
  constructor(props: IConfirmBatchButtonProps) {
    super(props);
  }

  handleClick = async () => {
    if (this.props.batch) {
      try {
        let confData = this.props.batch.isConfirmed;
        if (confData) {
          confData = false;
        } else {
          confData = true;
        }
        const newBatch: Batch = await updateBatch(
          this.props.batch.batchId,
          confData
        );
        this.props.batchUpdateActionMapper(newBatch);
        this.props.batchClickActionMapper(newBatch);
      } catch (e) {
        console.log("Confirm click failed", e.message);
      }
    } else {
      alert("No batch selected. Confirm click failed");
    }
  };

  render() {
    console.log("BUTTON PROPS", this.props);

    return (
      <Button onClick={this.handleClick}>
        {this.props.batch
          ? this.props.batch.isConfirmed
            ? "Unconfirm"
            : "Confirm"
          : null}
      </Button>
    );
  }
}

const mapDispatchToProps = {
  batchUpdateActionMapper,
  batchClickActionMapper,
};

export default connect(
  allTheMapStateToProps,
  mapDispatchToProps
)(ConfirmBatchButton);
