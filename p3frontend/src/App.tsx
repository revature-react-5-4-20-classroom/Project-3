import React, { useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch, BrowserRouter, NavLink } from 'react-router-dom';
import { InProgress, ReduxInProgress } from './Story1/InProgress';
import { Navbar, NavbarToggler, Nav, NavItem, Container } from 'reactstrap';

import { TrainerAssignmentComponent } from './Story4/TrainerAssignment';
import { ViewConsentRequests } from './GeneralPurposeComponents/ViewConsentRequests';
import { OverviewClientDemand } from './Story2/OverviewClientDemand';
import { OverviewTraining } from './Story3/OverviewTraining';
import { AssignTrainer } from './Story4/AssignTrainer';
import { TestdateDifferenceWeeks } from './GeneralPurposeHelpers/dateDifferenceWeeks';
import { Provider } from 'react-redux';
import { store } from './redux/store';


export class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  toggleNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    setIsOpen(!isOpen);
  };


  render()
  {
    return (<Container>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"/>
      {/* <TestdateDifferenceWeeks/> */}
      <Router>
        <Navbar color='light' light expand='md'>
            <NavbarToggler onClick={this.toggleNavbar}/>
            <Nav className='mr-auto' tabs>
              <NavItem>
                <NavLink to='/home' className='nav-link' activeClassName='active'>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/batches' className='nav-link' activeClassName='active'>Batches</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/in-progress' className='nav-link' activeClassName='active'>In Progress</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/overview' className='nav-link' activeClassName='active'>Overview</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/overview-training' className='nav-link' activeClassName='active'>Training Overview</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/assign-trainer' className='nav-link' activeClassName='active'>Assign Trainers</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/consent' className='nav-link' activeClassName='active'>Consent</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
        <Switch>
          <Provider store={store}>
            <Route path='/home'>
              Home page
            </Route>
            <Route path='/in-progress'>
              <ReduxInProgress/>
            </Route>
            <Route path='/overview'>
              <OverviewClientDemand/>
            </Route>
            <Route path='/overview-training'>
              <OverviewTraining/>
            </Route>
            <Route path='/assign-trainer'>
              <AssignTrainer/>
              <TrainerAssignmentComponent/>
            </Route>
            <Route path='/consent'>
              <ViewConsentRequests />
            </Route>
           </Provider>
          </Switch>
      </Router>
    </Container>)

  }
}

export default App;
