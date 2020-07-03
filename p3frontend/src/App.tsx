import React, { useState } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  BrowserRouter,
  NavLink,
} from "react-router-dom";

import { ReduxInProgress } from "./Story1/InProgress";
import { Navbar, NavbarToggler, Nav, NavItem, Container } from "reactstrap";
import { TestConvertToObject } from "./GeneralPurposeHelpers/convertToObject";
import { OverviewClientDemand } from "./Story2/OverviewClientDemand";
import { OverviewTraining } from "./Story3/OverviewTraining";
import { TestdateDifferenceWeeks } from "./GeneralPurposeHelpers/dateDifferenceWeeks";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import BatchModal from "./Story1/ViewBatchModal";
import { ColumnChartTest } from "./Story2/colGraphComponent";
import { TrainerAssignmentComponent } from "./Story4/TrainerAssignment";
import { ViewConsentRequests } from "./GeneralPurposeComponents/ViewConsentRequests";
import { TestASTableModel } from "./Story1/TestASTableModel";
import { FilterForm } from "./Story1/FilterForm";
import { BatchPage } from "./Components/GenerateBatch/BatchPage";

export class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  toggleNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    setIsOpen(!isOpen);
  };

  render() {
    return (
      <Container>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        />

        {
          /*
            Generate all the navbar items and routes from the given json

            end:  is the /endpoint in the url
            name: is displayed in the navbar to look nice
            comp: is the component to display within the route
          */
          createRoutesAndNavbar(this.toggleNavbar, [
            {
              end: "/in-progress",
              name: "S1 In Progress",
              comp: <ReduxInProgress />,
            },
            {
              end: "/overview-demand",
              name: "S2 Overview Demand",
              comp: <OverviewClientDemand />,
            },
            {
              end: "/overview-training",
              name: "S3 Overview Training",
              comp: <OverviewTraining />,
            },
            {
              end: "/trainer-assign",
              name: "Trainer assignment",
              comp: <TrainerAssignmentComponent />,
            },
            {
              end: "/consent-requests",
              name: "Consent requests",
              comp: <ViewConsentRequests />,
            },

            
            { end: "/BatchPage", name: "Gen batch", comp: <BatchPage /> },
            { end: "/test-convert", name: "TC", comp: <TestConvertToObject /> },
            { end: "/test-ASTable", name: "TAST", comp: <TestASTableModel /> },
          ])
        }
      </Container>
    );
  }
}

/*  
    returns a jsx component with the navbar and endpoint routes.
    creates that stuff from the array of endpoints and nav names
*/
function createRoutesAndNavbar(toggler: any, array: any) {
  return (
    <Router>
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggler} />
        <Nav className="mr-auto" tabs>
          {array.map((navEnd: any) => {
            return (
              <NavItem>
                <NavLink
                  to={navEnd.end}
                  className="nav-link"
                  activeClassName="active"
                >
                  {navEnd.name}
                </NavLink>
              </NavItem>
            );
          })}
        </Nav>
      </Navbar>
      <Switch>
        <Provider store={store}>
          {array.map((navEnd: any) => {
            return <Route path={navEnd.end}>{navEnd.comp}</Route>;
          })}
        </Provider>
      </Switch>
    </Router>
  );
}

export default App;
