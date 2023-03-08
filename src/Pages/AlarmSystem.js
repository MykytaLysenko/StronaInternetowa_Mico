import React, { Component } from 'react'
import { Card, Container, Tab } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Partners from '../Components/Partners';
import CarouselBox from "../Components/CarouselBox";




export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox />
                <Container style={{ marginTop: "20px", width: "70rem" }}>
                    <Card>
                        <Card.Body>
                            <Card.Title className="text-center m-3">System Alarmowy
                            </Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                            <Card.Img variant="top">
                            </Card.Img>
                        </Card.Body>

                    </Card>
                </Container>

                <Partners />
            </>
        )
    }

}