import React, { useState } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  BrowserRouter,
  NavLink,
  Redirect,
} from "react-router-dom";

import { InProgress, ReduxInProgress } from "./Story1/InProgress";
import { Navbar, NavbarToggler, Nav, NavItem, Container } from "reactstrap";
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
  }

  toggleNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    setIsOpen(!isOpen);
  };

  render() {
    return (
      <Container>
        <link
          rel='stylesheet'
          href='https://stackpath.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
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
                end: "/home",
                name: "Home",
                comp: <HomePage />,
              },
              {
                end: "/in-progress",
                name: "In Progress",
                comp: <ReduxInProgress />,
              },
              {
                end: "/overview-demand",
                name: "Demand vs Supply",
                comp: <OverviewClientDemand />,
              },
              {
                end: "/overview-training",
                name: "Generate Batch",
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

              // { end: "/test-convert", name: "TCO", comp: <TestConvertToObject /> },
              // { end: "/test-ASTable", name: "BTT", comp: <BatchTableTester /> },
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
      <Navbar color='light' light expand='md'>
        <NavbarToggler onClick={toggler} />
        <Nav className='mr-auto' tabs>
          {array.map((navEnd: any) => {
            return (
              <NavItem>
                <NavLink
                  to={navEnd.end}
                  className='nav-link'
                  activeClassName='active'
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
          <Route exact path='/'>
            <Redirect to='/home' />
          </Route>
          {array.map((navEnd: any) => {
            return <Route path={navEnd.end}>{navEnd.comp}</Route>;
          })}
          <Route exact path='*'>
            <Redirect to='/home' />
          </Route>
        </Provider>
      </Switch>
      <PageFooter />
    </Router>
  );
}

export default App;
