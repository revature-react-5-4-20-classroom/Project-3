import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, NavLink } from 'react-router-dom';
import { InProgress } from './Story1/InProgress';
import { Navbar, NavbarToggler, Nav, NavItem, Container } from 'reactstrap';
import { OverviewClientDemand } from './Story2/OverviewClientDemand';

export class App extends React.Component<any,any>
{
  constructor(props:any)
  {
    super(props)
  }

  toggleNavbar=()=>
  {
      const[isOpen,setIsOpen]=useState(false)
      setIsOpen(!isOpen)
  }

  render()
  {
    return (<Container>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"/>
      <Router>
        <Navbar color='light' light expand='md'>
            <NavbarToggler onClick={this.toggleNavbar}/>
            <Nav className='mr-auto' tabs>
              <NavItem>
                <NavLink to='/home' className='nav-link' activeClassName='active'>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/in-progress' className='nav-link' activeClassName='active'>In Progress</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/overview' className='nav-link' activeClassName='active'>Overview</NavLink>
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
      </Router>
    </Container>)
  }
}

export default App;
