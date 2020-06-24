import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  BrowserRouter,
  NavLink,
} from 'react-router-dom';
import { ViewAtAGlance } from './Story1/ViewAtAGlance';
import { Navbar, NavbarToggler, Nav, NavItem, Container } from 'reactstrap';

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
        <Router>
          <Navbar color='light' light expand='md'>
            <NavbarToggler onClick={this.toggleNavbar} />
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
            </Nav>
          </Navbar>
          <Route path='/home'>Home page</Route>
          <Route path='/batches'>
            <ViewAtAGlance />
          </Route>
        </Router>
      </Container>
    );
  }
}

export default App;
