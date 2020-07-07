import React, { useState } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  BrowserRouter,
  NavLink,
  Redirect,
  Link,
} from "react-router-dom";

import { ReduxInProgress } from "./Story1/InProgress";
import {
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Collapse,
  DropdownItem,
} from "reactstrap";
import { TestConvertToObject } from "./GeneralPurposeHelpers/convertToObject";
import { OverviewClientDemand } from "./Story2/OverviewClientDemand";
import { OverviewTraining } from "./Story3/OverviewTraining";
import { TestdateDifferenceWeeks } from "./GeneralPurposeHelpers/dateDifferenceWeeks";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BatchViewModal } from "./Story1/BatchViewModal";
import { ColumnChartTest } from "./Story2/colGraphComponent";
import { TrainerAssignmentComponent } from "./Story4/TrainerAssignment";
import { ViewConsentRequests } from "./GeneralPurposeComponents/ViewConsentRequests";
import { BatchTableTester } from "./Story1/BatchAssocTableTester";
import { FilterForm } from "./Story1/FilterForm";
import { HomePage } from "./Homepage";
import { PageFooter } from "./Footer";

export class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isBatchOpen: false,
      isTrainerOpen: false,
    };
  }

  toggleBatches = () => {
    this.setState({
      isBatchOpen: !this.state.isBatchOpen,
    });
  };

  toggleTrainers = () => {
    this.setState({
      isTrainerOpen: !this.state.isTrainerOpen,
    });
  };

  /*  
    returns a jsx component with the navbar and endpoint routes.
    creates that stuff from the array of endpoints and nav names
*/
  createRoutesAndNavbar = (array: any) => {
    return (
      <Router>
        <Navbar color='light' light expand='md'>
          {array.map((navEnd: any) => {
            if (navEnd.end === "/home") {
              return (
                <NavbarBrand
                  key={navEnd.name}
                  href={navEnd.end}
                  className='nav-link'
                  activeClassName='active'
                >
                  {navEnd.name}
                </NavbarBrand>
              );
            }
          })}
          <Nav className='mr-auto' navbar>
            <UncontrolledDropdown
              isOpen={this.state.isBatchOpen}
              toggle={this.toggleBatches}
              nav
              inNavbar
            >
              <DropdownToggle nav caret>
                Batches
              </DropdownToggle>
              <DropdownMenu>
                {array.map((navEnd: any) => {
                  if (navEnd.end.indexOf("/batch") > -1) {
                    return (
                      <>
                        <Link
                          to={navEnd.end}
                          className='nav-link'
                          key={navEnd.end}
                        >
                          {navEnd.name}
                        </Link>
                      </>
                    );
                  }
                })}
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown
              isOpen={this.state.isTrainerOpen}
              toggle={this.toggleTrainers}
              nav
              inNavbar
            >
              <DropdownToggle nav caret>
                Trainers
              </DropdownToggle>
              <DropdownMenu>
                {array.map((navEnd: any) => {
                  if (navEnd.end.indexOf("/trainers") > -1) {
                    return (
                      <Link
                        to={navEnd.end}
                        className='nav-link'
                        key={navEnd.end}
                      >
                        {navEnd.name}
                      </Link>
                    );
                  }
                })}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Navbar>
        <Switch>
          <Provider store={store}>
            <Container>
              <Route exact path='/'>
                <Redirect to='/home' />
              </Route>
              {array.map((navEnd: any) => {
                return <Route path={navEnd.end}>{navEnd.comp}</Route>;
              })}
              <Route exact path='*'>
                {/* <Redirect to='/home' /> WAAAAAAAAAAAAAAAAAAASSSSSSSSSS MAKING CHANGES*/}
                <Redirect to='/batch/training-overview' />
              </Route>
            </Container>
          </Provider>
        </Switch>
        <PageFooter />
      </Router>
    );
  };

  render() {
    return (
      <>
        {
          /*
            Generate all the navbar items and routes from the given json

            end:  is the /endpoint in the url
            name: is displayed in the navbar to look nice
            comp: is the component to display within the route
          */
          this.createRoutesAndNavbar([
            {
              end: "/home",
              name: "Reservoir",
              comp: <HomePage />,
            },
            {
              end: "/batch/in-progress",
              name: "Batches in Progress",
              comp: <ReduxInProgress />,
            },
            {
              end: "/batch/demand-overview",
              name: "Supply & Demand",
              comp: <OverviewClientDemand />,
            },
            {
              end: "/batch/training-overview",
              name: "Generate Batches",
              comp: <OverviewTraining />,
            },
            {
              end: "/trainers/trainer-assign",
              name: "Trainer assignment",
              comp: <TrainerAssignmentComponent />,
            },
            {
              end: "/trainers/consent-requests",
              name: "Consent requests",
              comp: <ViewConsentRequests />,
            },
            // {
            //   end: "/test-convert",
            //   name: "TCO",
            //   comp: <TestConvertToObject />,
            // },
            // { end: "/test-ASTable", name: "BTT", comp: <BatchTableTester /> },
          ])
        }
      </>
    );
  }
}

export default App;
