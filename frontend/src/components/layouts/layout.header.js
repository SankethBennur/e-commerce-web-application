import React from 'react'
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'
import { BrowserRouter, NavLink, Link } from 'react-router-dom'

function Header() {
     return (
          <div className='Header'>
               <Navbar bg="light" expand="lg">
                    <Container>
                         
                    <BrowserRouter>
                         <Link to="/" className='navbar-brand'>Admin Dashboard</Link>
                    </BrowserRouter>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                         <Nav className="me-auto">
                         <Nav.Link href="#home">Home</Nav.Link>
                         <Nav.Link href="#link">Link</Nav.Link>
                         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                         <NavDropdown.Divider />
                         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                         </NavDropdown>
                         </Nav>

                         {/*  seems like react-bootstrap evenly spaces all of the NAVs  */}
                         <Nav>
                              <BrowserRouter>
                                   <li className="nav-item">
                                        <NavLink to="signin" className="nav-link" >Sign in</NavLink>
                                   </li>
                              
                                   <li className="nav-item">
                                        <NavLink to="signup" className="nav-link" >Sign up</NavLink>
                                   </li>
                              </BrowserRouter>
                         </Nav>

                    </Navbar.Collapse>
                    </Container>
               </Navbar>

               {/* <h1><i>Hell World</i></h1> */}
               
          </div>
     );
}

export default Header;
