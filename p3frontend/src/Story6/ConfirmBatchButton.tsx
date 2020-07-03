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
  revealError: (error: Error) => void;
}

class ConfirmBatchButton extends React.Component<
  IConfirmBatchButtonProps,
  any
> {
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
        this.props.revealError(e);
      }
    } else {
      alert("No batch selected. Confirm click failed");
    }
  };

  render() {
    return (
      <button
        className="btn btn-secondary confirm-batch-btn"
        onClick={this.handleClick}
      >
        {this.props.batch
          ? this.props.batch.isConfirmed
            ? "Unconfirm"
            : "Confirm"
          : null}
      </button>
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
