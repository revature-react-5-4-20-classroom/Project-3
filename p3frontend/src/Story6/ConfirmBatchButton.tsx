import React from 'react';
import { Button } from 'reactstrap';
import { Batch } from '../models/Batch';
import { updateBatch } from '../api/batch';
import { IState } from '../redux/reducers';
import { batchUpdateActionMapper } from '../redux/action-mapper'
import { connect } from 'react-redux';

interface IConfirmBatchButtonProps {
    batch : Batch;
    batchUpdateActionMapper: (batch : Batch) => void
}

class ConfirmBatchButton extends React.Component<IConfirmBatchButtonProps, any> {

    handleClick = async () => {
        let confData = this.props.batch.isConfirmed;
        if (confData) {
            confData = false;
        } else {
            confData = true;
        }
        const newBatch = await updateBatch(this.props.batch.batchId, confData)
        console.log(newBatch);
        this.props.batchUpdateActionMapper(newBatch);
        // Needs to be connected to redux store for component tree to register change
    }

    render() {
        return (
            <Button onClick={this.handleClick}>
                {this.props.batch ? (this.props.batch.isConfirmed ? 'Unconfirm' : 'Confirm') : null}
            </Button>
        );
    }
}

const mapStateToProps = (state : IState) => {
    return {
        state
    }
}

const mapDispatchToProps = {
    batchUpdateActionMapper
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmBatchButton);