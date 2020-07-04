import React from "react";
import { Container, Nav, NavItem, NavLink, Row, Col, Button } from "reactstrap";
import { Route } from "react-router";
import { BatchView } from "./BatchView";
// import { NavLink } from "react-router-dom";
import { data } from "../../PseudoData/DataBatches.json";
import { connect } from "react-redux";
import { allTheMapStateToProps } from "../../redux/reducers";
import { allTheActionMappers } from "../../redux/action-mapper";
import ASTableModel from "../../Story1/ASTableModel";

export class BatchList extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      assoiates: false,
      batches: [],
      currentBatch: "any",
    };
  }

  batchData = (e: any) => {
    // e.preventDefault();
    this.setState({
      currentBatch: e,
      data: true,
    });
  };
  render() {
    return (
      <Container>
        <Row>
          <Col>
            {this.state.data ? (
              <ASTableModel currentBatch={this.state.currentBatch} />
            ) : (
              <></>
            )}
          </Col>
        </Row>
        <Row style={{ backgroundColor: "#474c55" }}>
          <Col>
            <h3>Possible Batches</h3>
            <Nav pills>
              {this.props.batches.map((obj: any, index: number) => {
                return (
                  <NavItem>
                    <NavLink
                      href="#"
                      onClick={(e) => {
                        this.batchData(obj);
                      }}
                    >
                      {obj.batchId}
                    </NavLink>
                  </NavItem>
                );
              })}
            </Nav>
          </Col>
        </Row>
      </Container>
    );
  }
}

export const ReduxBatchModal = connect(
  allTheMapStateToProps,
  allTheActionMappers
)(BatchList);
