import React from "react";
import { Modal, Container, ModalBody } from "reactstrap";
import { Batch } from "../models/Batch";
import { dateDifferenceWeeks } from "../GeneralPurposeHelpers/dateDifferenceWeeks";
import { associatesGetActiveTotal } from "../models/Associate";
import { Trainer } from "../models/Trainer";

interface TimelineModalProps {
  isOpen: boolean;
  toggle: () => void;
  batch: Batch;
}

export class TimelineModal extends React.Component<TimelineModalProps> {
  constructor(props: TimelineModalProps) {
    super(props);
  }
  render() {
    let currentWeek = dateDifferenceWeeks(
      new Date(this.props.batch.startDate),
      new Date(Date.now())
    );
    let remainingWeeks = dateDifferenceWeeks(
      new Date(Date.now()),
      new Date(this.props.batch.endDate)
    );

    let activeAssociates = associatesGetActiveTotal(
      this.props.batch.associates,
      true
    );
    let inactiveAssociates = associatesGetActiveTotal(
      this.props.batch.associates,
      false
    );

    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
        <Container>
          <ModalBody>
            <p>{`Batch Id: ${this.props.batch.batchId}`}</p>
            <p>{`Start Date: ${this.props.batch.startDate}`}</p>
            <p>{`End Date: ${this.props.batch.endDate}`}</p>
            <p>{`Current Week: ${currentWeek}`}</p>
            <p>{`Remaining Weeks: ${remainingWeeks}`}</p>
            <p>{`Skillset: ${this.props.batch.curriculum.name}`}</p>
            <p>{`Active Associates: ${activeAssociates}`}</p>
            <p>{`Inactive Associates: ${inactiveAssociates}`}</p>
            {/* <div>
                             {this.props.batch.trainers.map((trainer:Trainer,index) => {
                                return (<p>{`Trainer ${index+1}: ${trainer.firstName} ${trainer.lastName}`}</p>)
                            })} 
                        </div> */}
            <p>{`Location: ${this.props.batch.location.locationName}`}</p>
          </ModalBody>
        </Container>
      </Modal>
    );
  }
}
