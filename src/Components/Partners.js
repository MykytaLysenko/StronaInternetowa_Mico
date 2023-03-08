import React, { Component } from "react";
import { Container, Card, CardGroup, Row, Col } from "react-bootstrap";
import one from "../assets/sponsors/p2.jpg";
import two from "../assets/sponsors/p3.jpg";
import sri from "../assets/sponsors/p5.jpg";
import fo from "../assets/sponsors/p8.jpg";
import fif from "../assets/sponsors/p21.jpg";
import si from "../assets/sponsors/p22.jpg";
import sew from "../assets/sponsors/p10.jpg";
import eht from "../assets/sponsors/p9.jpg";
import nine from "../assets/sponsors/p1.jpg";
import ten from "../assets/sponsors/p4.jpg";
import ele from "../assets/sponsors/p13.jpg";
import twe from "../assets/sponsors/Polskafederacjamma.jpg";
import sier from "../assets/sponsors/p6.jpg";
import foer from "../assets/sponsors/p11.jpg";
import fier from "../assets/sponsors/p16.jpg";
import sie from "../assets/sponsors/p7.jpg";
import sewer from "../assets/sponsors/p12.jpg";
import ehter from "../assets/sponsors/p17.jpg";
import niner from "../assets/sponsors/p18.jpg";
import twen from "../assets/sponsors/p19.jpg";
import tele from "../assets/sponsors/p14.jpg";

export default class Partners extends Component {
    render() {
        return (
            <>
                <Container  >
                    <h2 className="text-center m-4">Partnerzy</h2>
                    <Row className="m-4">
                        <CardGroup>
                            <Card style={{ width: '18rem', height: "8rem" }}>
                                <Card.Img variant="top" src={one} />
                            </Card>
                            <Card style={{ width: '18rem', height: "8rem" }}>
                                <Card.Img variant="top" src={two} />
                            </Card>
                            <Card style={{ width: '18rem', height: "8rem" }}>
                                <Card.Img variant="top" src={sri} />
                            </Card>
                            <Card style={{ width: '18rem', height: "8rem" }}>
                                <Card.Img variant="top" src={fo} />
                            </Card>
                            <Card style={{ width: '18rem', height: "8rem" }}>
                                <Card.Img variant="top" src={fif} />
                            </Card>
                            <Card style={{ width: '18rem', height: "8rem" }}>
                                <Card.Img variant="top" src={si} />
                            </Card>
                            <Card style={{ width: '18rem', height: "8rem" }}>
                                <Card.Img variant="top" src={foer} />
                            </Card>
                            <Card style={{ width: '18rem', height: "8rem" }}>
                                <Card.Img variant="top" src={niner} />
                            </Card>
                            <Card style={{ width: '18rem', height: "8rem" }}>
                                <Card.Img variant="top" src={fier} />
                            </Card>
                            <Card style={{ width: '18rem', height: "8rem" }}>
                                <Card.Img variant="top" src={sier} />
                            </Card>
                        </CardGroup>

                        <CardGroup>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={ehter} />
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={eht} />
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={nine} />
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={ten} />
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={ele} />
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={twen} />
                            </Card>
                        </CardGroup>

                        <CardGroup>
                            <Card style={{ width: '18rem', height: "8rem" }}>
                                <Card.Img variant="top" src={sewer} />
                            </Card>
                            <Card style={{ width: '18rem', height: "8rem" }}>
                                <Card.Img variant="top" src={sew} />
                            </Card>
                            <Card style={{ width: '18rem', height: "8rem" }}>
                                <Card.Img variant="top" src={twe} />
                            </Card>
                            <Card style={{ width: '18rem', height: "8rem" }}>
                                <Card.Img variant="top" src={sie} />
                            </Card>
                            <Card style={{ width: '18rem', height: "8rem" }}>
                                <Card.Img variant="top" src={tele} />
                            </Card>
                        </CardGroup>

                    </Row>
                </Container>
            </>
        )

    }
}