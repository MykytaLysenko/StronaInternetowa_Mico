import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import img1 from "../assets/referencje/01.jpg"
import img2 from "../assets/referencje/02.jpg"
import img3 from "../assets/referencje/03.jpg"
import img4 from "../assets/referencje/04.jpg"
import img5 from "../assets/referencje/05.jpg"
import img6 from "../assets/referencje/06.jpg"
import img7 from "../assets/referencje/07.jpg"
import img8 from "../assets/referencje/08.jpg"
import img9 from "../assets/referencje/09.jpg"
import img10 from "../assets/referencje/10.jpg"



export default class Home extends Component {

    render() {
        return (
            <>
                <Container>
                    <h1 className="text-center m-4">Referencje</h1>
                    <Row>
                        <Col>
                            <Card style={{ width: '15rem', marginBottom: '10px' }}>
                                <Card.Img variant="top" src={img1} />
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={img2} />
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '15rem', marginBottom: '10px' }}>
                                <Card.Img variant="top" src={img3} />
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={img4} />
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '15rem', marginBottom: '10px' }}>
                                <Card.Img variant="top" src={img5} />
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={img6} />
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '15rem', marginBottom: '10px' }}>
                                <Card.Img variant="top" src={img7} />
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={img8} />
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '15rem', marginBottom: '10px' }}>
                                <Card.Img variant="top" src={img9} />
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={img10} />
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        )

    }
}