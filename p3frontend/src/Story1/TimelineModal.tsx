import React from "react";
import { Modal, Container, ModalBody } from "reactstrap";
import { Batch } from "../models/Batch";
import { dateDifferenceWeeks } from "../GeneralPurposeHelpers/dateDifferenceWeeks";
import { associatesGetActiveTotal } from "../models/Associate";
import { Trainer } from "../models/Trainer";
import { convertDateToUTC } from "../GeneralPurposeHelpers/convertDateToUTC";

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
      convertDateToUTC(this.props.batch.startDate),
      convertDateToUTC()
    );
    let remainingWeeks = dateDifferenceWeeks(
      convertDateToUTC(),
      convertDateToUTC(this.props.batch.endDate)
    );
    let alreadyHappened = "";
    if (remainingWeeks === -1) {
      alreadyHappened = "Already happened";
    }
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
            <p>{`Remaining Weeks: ${
              alreadyHappened ? alreadyHappened : remainingWeeks
            }`}</p>
            <p>{`Skillset: ${this.props.batch.curriculum.curriculumSkillset.skillSetName}`}</p>
            <p>{`Program Type: ${this.props.batch.programType}`}</p>
            <p>{`Active Associates: ${activeAssociates}`}</p>
            <p>{`Inactive Associates: ${inactiveAssociates}`}</p>
            <div>
              {this.props.batch.trainers.map((trainer: Trainer, index) => {
                return (
                  <p>{`Trainer ${index + 1}: ${trainer.firstName} ${
                    trainer.lastName
                  }`}</p>
                );
              })}
            </div>
            <p>{`Location: ${this.props.batch.location.locationName}`}</p>
            <p>{`Confirmed: ${this.props.batch.isConfirmed ? "Yes" : "No"}`}</p>
          </ModalBody>
        </Container>
      </Modal>
    );
  }
}
