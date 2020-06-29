import React, { useState } from 'react';
import './App.css';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { ViewAtAGlance } from './Story1/ViewAtAGlance';
=======

import { BrowserRouter as Router, Route, Switch, BrowserRouter, NavLink } from 'react-router-dom';
import { InProgress } from './Story1/InProgress';
>>>>>>> development
import { Navbar, NavbarToggler, Nav, NavItem, Container } from 'reactstrap';
import AssociateSelectionTable from './Components/AssociateSelectionTable';
import AssociateBatchTable from './Components/AssociateBatchTable';


<<<<<<< HEAD
export class App extends React.Component<any,any>
{
  
  toggleNavbar=()=>
  {
      const[isOpen,setIsOpen]=useState(false)
      setIsOpen(!isOpen)
=======
import { TrainerAssignmentComponent } from './Components/TrainerAssignment';
import { ViewConsentRequests } from './Components/ViewConsentRequests';
import { OverviewClientDemand } from './Story2/OverviewClientDemand';
import { OverviewTraining } from './Story3/OverviewTraining';
import { AssignTrainer } from './Story4/AssignTrainer';
import { TestdateDifferenceWeeks } from './GeneralPurposeHelpers/dateDifferenceWeeks';


export class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
>>>>>>> development
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
                <NavLink
                  to='/home'
                  className='nav-link'
                  activeClassName='active'
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>

                <NavLink
                  to='/batches'
                  className='nav-link'
                  activeClassName='active'
                >
                  Batches
                </NavLink>
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
            </Nav>
        </Navbar>
        <Route path='/home'>
          Home page
        </Route>
        <Route path='/in-progress'>
          <InProgress/>
        </Route>
        <Route path='/overview'>
          <OverviewClientDemand/>
        </Route>
        <Route path='/overview-training'>
          <OverviewTraining/>
        </Route>
        <Route path='/assign-trainer'>
          <AssignTrainer/>
        </Route>
        <Route path='/trainers'>
          <TrainerAssignmentComponent />
        </Route>
        <Route path='/consent'>
          <ViewConsentRequests />
        </Route>
      </Router>
<<<<<<< HEAD
      
        <div className= "left"><AssociateSelectionTable /></div>
        <div className= "right"><AssociateBatchTable /></div>
      

    </Container>
    )
=======
    </Container>)

>>>>>>> development
  }
}

export default App;
