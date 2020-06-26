import React from 'react';
import { Button } from 'reactstrap';
import { Batch } from '../models/Batch';
import { updateBatch } from '../api/batch';

interface IConfirmBatchButtonProps {
    batch : Batch;
}

export class ConfirmBatchButton extends React.Component<IConfirmBatchButtonProps, any> {

    handleClick = () => {
        let confData = this.props.batch.isConfirmed;
        if (confData) {
            confData = false;
        } else {
            confData = true;
        }
        updateBatch(this.props.batch.batchId, confData)
            .then(batch => console.log(batch));
            
    }

    render() {
        return (
            <Button onClick={this.handleClick}>
                {this.props.batch ? (this.props.batch.isConfirmed ? 'Unconfirm' : 'Confirm') : null}
            </Button>
        );
    }
}