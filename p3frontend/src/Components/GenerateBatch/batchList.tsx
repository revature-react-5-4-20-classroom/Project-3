import React from "react";
import { Container, Nav, NavItem, NavLink, Row, Col, Button } from "reactstrap";
import { Route } from "react-router";
import { BatchView } from "./BatchView";
// import { NavLink } from "react-router-dom";
import { data } from "../../PseudoData/DataBatches.json";

export class BatchList extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: false,
    };
  }
  batchData = (e: any) => {
    e.preventDefault();
    this.setState({
      data: true,
    });
  };
  render() {
    return (
      <Container style={{ backgroundColor: "#474c55" }}>
        <h3>Possible Batches</h3>
        {/* {this.state.data.map((obj: any, index: number) => {
          return  <NavItem>
            <NavLink href="#" onClick={this.batchData}>
              Carriculam 1
            </NavLink>
          </NavItem>
        })} */}
        <Nav pills>
          <NavItem>
            <NavLink href="#" onClick={this.batchData}>
              Carriculam 1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={this.batchData}>
              Carriculam 2
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={this.batchData}>
              Carriculam 3
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={this.batchData}>
              Carriculam 4
            </NavLink>
          </NavItem>
        </Nav>
        {/* just for getting ideas */}

        <div style={{ display: this.state.data ? "block" : "none" }}>
          {data.map((obj: any, index: number) => {
            return (
              //  < <li key={obj.batchId}>
              //     {obj.batchId}
              //   </li>>
              <>
                <Row>
                  <Col md={10}>
                    <BatchView batchObj={obj}></BatchView>
                  </Col>
                  <Col md={2}>
                    <Button
                      onClick={(e) => {
                        this.setState({ data: false });
                      }}
                    >
                      Update
                    </Button>
                  </Col>
                </Row>
              </>
            );
          })}
        </div>

        {/* {this.state.comments.map((obj: any, index: number) => {
          return <BatchView></BatchView>;
        })} */}
      </Container>
    );
  }
}
