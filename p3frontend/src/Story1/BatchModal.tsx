import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  NavItem,
  Nav,
  Navbar,
} from "reactstrap";
import { pseudoDataResponse } from "../PseudoData/convertJsonToObjects";
import TrainersModal from "./TrainersModal";
import AssociatesModal from "./AssociatesModal";
import "../../src/index.css";

class BatchModal extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      modal: true,
      backendData: pseudoDataResponse.data.filter((aBatch: any) => {
        return aBatch.batchId === this.props.currentBatchId;
      }),
      showTrainers: false,
    };
  }
  // async componentDidMount() {
  //   await this.loadData();
  // }

  // loadData() {
  //   let currentBatch = pseudoDataResponse.data.filter((aBatch: any) => {
  //     return aBatch.batchId === this.props.currentBatchId;
  //   });
  //   this.setState({
  //     backendData: currentBatch,
  //   });
  // }

  render() {
    let selectedBatch = this.state.backendData[0];
    const { buttonLabel, className } = this.props;
    console.log("this is pseudo data", selectedBatch);
    const toggle = () =>
      this.setState({
        modal: !this.state.modal,
      });

    const changeModalViewToTrainer = () => {
      this.setState({
        showTrainers: true,
      });
    };
    const changeModalViewToAssociate = () => {
      this.setState({
        showTrainers: false,
      });
    };

    return (
      <div>
        <Button color="danger" onClick={toggle}>
          {buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={toggle}
          contentClassName="modalStyle"
        >
          <ModalHeader toggle={toggle}>Selected Batch</ModalHeader>
          <ModalBody>
            <div>
              <b>Start Date:</b> {selectedBatch.startDate}
            </div>
            <div>
              <b>End Date: </b>
              {selectedBatch.endDate}
            </div>
            <div>
              <b>Curriculum Name:</b> {selectedBatch.curriculum.name}
            </div>
            <div>
              <b>Batch Number:</b> {selectedBatch.batchId}
            </div>
          </ModalBody>
          <br></br>
          <br></br>
          <br></br>
          <ModalFooter>
            <Navbar>
              <Nav onClick={changeModalViewToTrainer}>
                <NavItem
                  activeClassName="active"
                  className="modalNavItem trainerModalNav nav-link"
                >
                  Trainers
                </NavItem>
              </Nav>
              <Nav onClick={changeModalViewToAssociate}>
                <NavItem className="modalNavItem associatesModalNav nav-link">
                  Associates
                </NavItem>
              </Nav>
            </Navbar>
            {/* <Button color="primary" onClick={changeModalView}>
              Toggle Trainers/Associates
            </Button> */}
          </ModalFooter>
          <ModalBody>
            {this.state.showTrainers ? (
              <TrainersModal></TrainersModal>
            ) : (
              <AssociatesModal> </AssociatesModal>
            )}
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default BatchModal;
