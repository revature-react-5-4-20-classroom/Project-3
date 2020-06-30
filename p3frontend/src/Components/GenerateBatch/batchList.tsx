import React from "react";
import { Container, Nav, NavItem, NavLink } from "reactstrap";
import { Route } from "react-router";
import { BatchView } from "./BatchView";
// import { NavLink } from "react-router-dom";

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
        {/* {this.state.comments.map((obj: any, index: number) => {
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
          <BatchView />
          <br />
          <BatchView />
          <br />
          <BatchView />
          <br />
          <BatchView />
          <br />
          <BatchView />
          <br />
        </div>

        {/* {this.state.comments.map((obj: any, index: number) => {
          return <BatchView></BatchView>;
        })} */}
      </Container>
    );
  }
}
