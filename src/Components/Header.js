import React, {Component} from 'react';
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import logo from './logo192.png';

import Home from '../Pages/Home';
import Contacts from '../Pages/Contacts';
import Galeria from '../Pages/Galeria';
import MassEvents from '../Pages/MassEvents';
import PhysicalProtection from '../Pages/PhysicalProtection';
import AlarmSystem from '../Pages/AlarmSystem';
import Referencje from '../Pages/Referencje';


export default class Header extends Component{
    render(){
        return(
            <>
            <Navbar sticky="top" collapseOnSelect expand="md" bg="warning" variant="light" > 
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="85"
                            width="85"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>

                            <NavDropdown title="Oferty" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/massevents">Imprezy masowe</NavDropdown.Item>
                            <NavDropdown.Item href="/physicalprotection">Ochrona fizyczna</NavDropdown.Item>
                            <NavDropdown.Item href="/alarmsystem">Systemy alarmowe</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link href="/contacts">Contacts</Nav.Link>
                            <Nav.Link href="/galeria">Galeria</Nav.Link>
                            <Nav.Link href="/referencje">Referencje</Nav.Link>
                        </Nav>      
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Router>
            <       Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/contacts' element={<Contacts/>}/>
                        <Route path='/galeria' element={<Galeria/>}/>
                        <Route path='/massevents' element={<MassEvents/>}/>
                        <Route path='/physicalprotection' element={<PhysicalProtection/>}/>
                        <Route path='/alarmsystem' element={<AlarmSystem/>}/>
                        <Route path ='/referencje' element={<Referencje/>}/>
                    </Routes>
            </Router>

            </>
        )
    }

}