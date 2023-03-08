import React, { Component } from "react";
import { Container, Row, Col, Link, Nav } from "react-bootstrap";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import logo from './logo192.png';





export default class Footer extends Component {
    render() {
        return (
            <>
                <Container fluid style={{ backgroundColor: '#ffc107', color: '#000', marginTop: '10px'}}>
                    <Container style={{ padding: '10px' }}>
                        <Row>
                            <Col>
                                <img
                                    src={logo}
                                    height="150"
                                    width="150"
                                    className="d-inline-block align-top"
                                    alt="Logo"
                                />
                            </Col>
                            <Col>
                                <h4>O firme</h4>
                                <ul className="list-unstyled">
                                    <Nav.Link href="/massevents">Imprezy masowe</Nav.Link>
                                    <Nav.Link href="/physicalprotection">Ochrona fizyczna</Nav.Link>
                                    <Nav.Link href="/alarmsystem">Systemy alarmowe</Nav.Link>
                                </ul>
                            </Col>

                            <Col>
                                <h4>Contact us</h4>
                                <ul className="list-unstyled">
                                    <Nav.Link href="https://www.facebook.com/MikoLublin/photos">Facebook</Nav.Link>
                                    <Nav.Link href="/contacts">Napiś mail</Nav.Link>
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                &copy;{new Date().getFullYear()} Wszelkie prawa zastrzeżone.
                            </Col>
                        </Row>
                    </Container>
                </Container>




            </>
        )
    }

}