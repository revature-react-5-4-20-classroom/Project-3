import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { ViewAtAGlance } from './Story1/ViewAtAGlance';
import { Navbar, NavbarToggler, Nav, NavItem, Container } from 'reactstrap';
import AssociateSelectionTable from './Components/AssociateSelectionTable';
import AssociateBatchTable from './Components/AssociateBatchTable';


export class App extends React.Component<any,any>
{
  
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
                <NavLink to='/batches' className='nav-link' activeClassName='active'>Batches</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
        <Route path='/home'>
          Home page
        </Route>
        <Route path='/batches'>
          <ViewAtAGlance/>
        </Route>
      </Router>
      
        <div className= "left"><AssociateSelectionTable /></div>
        <div className= "right"><AssociateBatchTable /></div>
      

    </Container>
    )
  }
}

export default App;
