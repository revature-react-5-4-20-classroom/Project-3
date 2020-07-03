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

/*
  <BatchModal currentBatch={aBatchObject}/>

  The modal will look like a View button.
  when that button is clicked the modal will pop up
*/
class BatchModal extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      showThis: false,
      showTrainers: false, //T to show trainers. F to show associates
    };
  }

  render() {
    const toggle = () => {
      this.setState({ showThis: !this.state.showThis });
      this.props.batchClickActionMapper(this.props.currentBatch);
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
            <br />
            <Row>
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
              <>
                <span>This is trainers stuff - </span>
                <span>This is trainers stuff - </span>
              </>
            ) : (
              <ASTableModel currentBatch={this.props.currentBatch} />
            )}
            <ConfirmBatchButton />
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default BatchModal;

export const ReduxBatchModal = connect(
  allTheMapStateToProps,
  allTheActionMappers
)(BatchModal);
