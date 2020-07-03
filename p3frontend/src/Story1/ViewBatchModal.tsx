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
  Row,
  Col,
  NavbarToggler,
  ButtonGroup,
  Container,
} from "reactstrap";
import { pseudoDataResponse } from "../PseudoData/convertJsonToObjects";
import "../../src/index.css";
import ASTableModel from "./ASTableModel";
import { connect } from "react-redux";
import { allTheMapStateToProps } from "../redux/reducers";
import { allTheActionMappers } from "../redux/action-mapper";
import { Batch } from "../models/Batch";
import { prnt } from "../GeneralPurposeHelpers/Prnt";
import { ErrorAlert } from "../GeneralPurposeHelpers/ErrorAlert";
import { axiosClient } from "../api/axios";

/*
  <BatchModal currentBatch={aBatchObject}/>

  The modal will look like a View button.
  when that button is clicked the modal will pop up
*/

interface IPViewBatchModal {
  currentBatch: Batch;
}

class ViewBatchModal extends React.Component<IPViewBatchModal, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      showThis: false,
      showTrainers: false, //T to show trainers. F to show associates
      errorObj: null,
      errorMsg: "",
    };
  }

  render() {
    const toggle = () => {
      this.setState({ showThis: !this.state.showThis });
      //this.props.batchClickActionMapper(this.props.currentBatch);
    };

    return (
      <>
        <Button onClick={toggle}>View</Button>
        <Modal
          isOpen={this.state.showThis}
          contentClassName="modalStyle"
          size="lg"
        >
          <ModalHeader toggle={toggle}>
            Batch {this.props.currentBatch.batchId}
          </ModalHeader>
          <ModalBody>
            <Row>
              <Col>
                <b>Start Date:</b>
              </Col>
              <Col>{this.props.currentBatch.startDate}</Col>
            </Row>
            <Row>
              <Col>
                <b>End Date: </b>
              </Col>
              <Col>{this.props.currentBatch.endDate}</Col>
            </Row>
            <Row>
              <Col>
                <b>Curriculum Name:</b>
              </Col>
              <Col>
                {this.props.currentBatch.curriculum
                  ? this.props.currentBatch.curriculum.name
                  : "no-curriculum"}
              </Col>
            </Row>
            <Row>
              <Col>
                <b>Confirmed</b>
              <br/>
                <ButtonGroup>
                  <Button
                    color={this.props.currentBatch.isConfirmed?"primary":"secondary"}
                    onClick={this.patchABatchChangeIsConfirmed}
                  >
                    Yes
                  </Button>
                  <Button
                    color={this.props.currentBatch.isConfirmed?"secondary":"primary"}
                    onClick={this.patchABatchChangeIsConfirmed}
                  >
                    No
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>
            <Row>
              <ErrorAlert
                error={this.state.errorObj}
                message={this.state.errorMsg}
              />
            </Row>
            <br />
            <Row>
              <Col>
                <Button onClick={toggle} color="success" size="lg">
                  OK
                </Button>
              </Col>
              <Col>
                <Button
                  color={this.state.showTrainers ? "secondary" : "primary"}
                  onClick={() => {
                    this.setState({ showTrainers: false });
                  }}
                >
                  Associates
                </Button>
              </Col>
              <Col>
                <Button
                  color={this.state.showTrainers ? "primary" : "secondary"}
                  onClick={() => {
                    this.setState({ showTrainers: true });
                  }}
                >
                  Trainers
                </Button>
              </Col>
            </Row>
            <hr />
          </ModalBody>

          <ModalBody>
            {this.state.showTrainers ? (
              <>
                <span>This is trainers stuff - </span>
                <span>This is trainers stuff - </span>
              </>
            ) : (
              <ASTableModel currentBatch={this.props.currentBatch} />
            )}
          </ModalBody>
        </Modal>
      </>
    );
  }

  patchABatchChangeIsConfirmed = async () => {
    this.props.currentBatch.isConfirmed = !this.props.currentBatch.isConfirmed;

    try {
      let request = { isConfirmed: this.props.currentBatch.isConfirmed };

      await axiosClient.patch(
        `/batches/${this.props.currentBatch.batchId}`,
        request
      );
    } catch (e) {
      this.setState({
        errorObj: e,
        errorMsg: "Could not change is confirmed",
      });
    }

    this.setState({}); //re-render
  };
}

export default ViewBatchModal;

export const ReduxBatchModal = connect(
  allTheMapStateToProps,
  allTheActionMappers
)(ViewBatchModal);
