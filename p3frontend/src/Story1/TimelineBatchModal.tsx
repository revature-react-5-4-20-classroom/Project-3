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
import "../../src/index.css";
import BatchAssocTable, { BatchAssocTableRedux } from "./BatchAssocTable";
import { connect } from "react-redux";
import { allTheMapStateToProps } from "../redux/reducers";
import { allTheActionMappers } from "../redux/action-mapper";
import { Batch } from "../models/Batch";
import { ErrorAlert } from "../GeneralPurposeHelpers/ErrorAlert";
import { BatchTrainersTableRedux } from "./BatchTrainersTable";
import { axiosClient } from "../api/axios";

interface IPBatchViewModal {
  currentBatch: Batch;
  parentTop: any;
  isOpen: boolean;
  toggle: () => void;

  batchClickActionMapper: (batch: Batch) => void;
  batchUpdateActionMapper: (batch: Batch) => void;
}

export class TimelineBatchModal extends React.Component<IPBatchViewModal, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      errorObj: null,
      errorMsg: "",
    };
  }

  render() {
    return (
      <>
        <Modal
          isOpen={this.props.isOpen}
          contentClassName="modalStyle"
          size="lg"
        >
          <ModalHeader toggle={this.props.toggle}>
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
                <br />
                <ButtonGroup>
                  <Button
                    color={
                      this.props.currentBatch.isConfirmed
                        ? "primary"
                        : "secondary"
                    }
                    onClick={this.patchABatchChangeIsConfirmed}
                  >
                    Yes
                  </Button>
                  <Button
                    color={
                      this.props.currentBatch.isConfirmed
                        ? "secondary"
                        : "primary"
                    }
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
                <Button onClick={this.props.toggle} color="success" size="lg">
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

          {/* 
            <ModalFooter>
            <Navbar color='light' light expand='md'>
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
          </ModalFooter>*/}

          <ModalBody>
            {this.state.showTrainers ? (
              <BatchTrainersTableRedux
                currentBatch={this.props.currentBatch}
                parentTop={this.props.parentTop}
              />
            ) : (
              <BatchAssocTableRedux
                currentBatch={this.props.currentBatch}
                parentTop={this.props.parentTop}
              />
            )}
          </ModalBody>
        </Modal>
      </>
    );
  }

  patchABatchChangeIsConfirmed = async () => {
    //change the batch model which is not a react component. just js object
    this.props.currentBatch.isConfirmed = !this.props.currentBatch.isConfirmed;

    try {
      let request = { isConfirmed: this.props.currentBatch.isConfirmed };

      await axiosClient.patch(
        `/batches/${this.props.currentBatch.batchId}`,
        request
      );

      this.props.batchUpdateActionMapper(this.props.currentBatch);
      this.setState({});
    } catch (e) {
      this.setState({
        errorObj: e,
        errorMsg: `Could not change isConfirmed to ${
          this.props.currentBatch.isConfirmed ? "Yes" : "No"
        }`,
      });
    }

    this.props.parentTop.setState({}); //re-render
  };
}
export const ReduxTimelineBatchModal = connect(
  allTheMapStateToProps,
  allTheActionMappers
)(TimelineBatchModal);
