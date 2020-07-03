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
import ConfirmBatchButton from "../Story6/ConfirmBatchButton";
import { Batch } from "../models/Batch";
import { prnt } from "../GeneralPurposeHelpers/Prnt";
import { ErrorAlert } from "../GeneralPurposeHelpers/ErrorAlert";
import IsConfirmedColumn from "../Story6/IsConfirmedColumn";
import { getBatchById } from "../api/batch";

/*
  <BatchModal currentBatch={aBatchObject}/>

  The modal will look like a View button.
  when that button is clicked the modal will pop up
*/

interface IPViewBatchModal {
  batch: Batch;
  batchDisplayObj: Batch;
  batchClickActionMapper: (batch: Batch) => void;
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

  revealError = (error: Error) => {
    this.setState({
      errorObj: error,
      errorMsg: error.message,
    });
  };

  toggle = async () => {
    try {
      const currentBatchId = this.props.batchDisplayObj.batchId;
      const realBatch = await getBatchById(currentBatchId);
      this.props.batchClickActionMapper(realBatch);
    } catch (e) {
      this.setState({ errorObj: e, errorMsg: e.message });
    } finally {
      this.setState({ showThis: !this.state.showThis });
    }
  };

  render() {
    return (
      <>
        <Button onClick={this.toggle}>View</Button>
        <Modal
          isOpen={this.state.showThis}
          contentClassName="modalStyle"
          size="lg"
        >
          <ModalHeader toggle={this.toggle}>
            Batch {this.props.batchDisplayObj.batchId}
          </ModalHeader>
          <ModalBody>
            <Container>
              <Row>
                <Col>
                  <b>Start Date:</b>
                </Col>
                <Col>{this.props.batchDisplayObj.startDate}</Col>
              </Row>
              <Row>
                <Col>
                  <b>End Date: </b>
                </Col>
                <Col>{this.props.batchDisplayObj.endDate}</Col>
              </Row>
              <Row>
                <Col>
                  <b>Curriculum Name:</b>
                </Col>
                <Col>
                  {this.props.batchDisplayObj.curriculum
                    ? this.props.batchDisplayObj.curriculum.name
                    : "no-curriculum"}
                </Col>
              </Row>
              <Row>
                <Col>
                  <b>Confirmed</b>
                  <br />
                </Col>
                <IsConfirmedColumn />
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
                  <Button onClick={this.toggle} color="success" size="lg">
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
            </Container>
            <hr />
          </ModalBody>

          <ModalBody>
            {this.state.showTrainers ? (
              <>
                <span>This is trainers stuff - </span>
                <span>This is trainers stuff - </span>
              </>
            ) : (
              <ASTableModel currentBatch={this.props.batchDisplayObj} />
            )}
            <Container>
              <div className="row justify-content-center">
                <div className="col-xs-12 confirm-batch-btn-col">
                  <ConfirmBatchButton revealError={this.revealError} />
                </div>
              </div>
            </Container>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default connect(
  allTheMapStateToProps,
  allTheActionMappers
)(ViewBatchModal);
