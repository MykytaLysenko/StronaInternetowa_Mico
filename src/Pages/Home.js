import { Component } from "react";
import CarouselBox from "../Components/CarouselBox";
import { Container, Card, Button, CardGroup, Row, Col } from "react-bootstrap";
import card1 from "../assets/im.jpg"
import card2 from "../assets/of.jpg"
import card3 from "../assets/sa.jpg"
import { Link } from "react-router-dom";
import Partners from "../Components/Partners";


export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox />
                <br>
                </br>
                <Container>
                    <h2 className="text-center m-4">O firme</h2>

                        <p>Niniejszym mamy przyjemność przedstawić Państwu „MIKO” CENTRUM OCHRONY I ZABEZPIECZEŃ, jako jedną z pierwszych w Polsce firm wyspecjalizowanych w świadczeniu usług ochrony osób i mienia, traktujących problematykę bezpieczeństwa kompleksowo i profesjonalnie.</p>
                        <p>„MIKO” CENTRUM OCHRONY I ZABEZPIECZEŃ, posiada niezbędne środki potrzebne do przeprowadzania najbardziej złożonych i prowadzonych na szeroką skalę przedsięwzięć, zgodnie z najwyższymi standardami i odpowiednimi przepisami prawa, dostosowując się do wymagań i nietypowych życzeń Zleceniodawcy.</p>
                        <p>Ufamy, iż nasza oferta spotka się z Państwa zainteresowaniem.</p>
                        <p>Z przyjemnością udzielimy wszelkich informacji i wyjaśnień odnośnie spraw Pastwa interesujących.</p>
                    

                </Container>
                <Container>
                    <h2 className="text-center m-4">Oferty</h2>
                    <CardGroup className="m-4" >
                        <Card className="text-center">
                            <Card.Img
                                variant="top"
                                src={card1} />
                            <Card.Body>
                                <Card.Title>Imprezy masowe</Card.Title>
                                <br>
                                </br>
                                <Button href="/MassEvents" variant="primary">Przejście do Oferty</Button>
                            </Card.Body>
                        </Card>
                        <Card className="text-center">
                            <Card.Img
                                variant="top"
                                src={card2} />
                            <Card.Body>
                                <Card.Title>Ochrona fizyczna</Card.Title>
                                <br>
                                </br>
                                <Button href="/PhysicalProtection" variant="primary">Przejście do Oferty</Button>
                            </Card.Body>
                        </Card>
                        <Card className="text-center">
                            <Card.Img
                                variant="top"
                                src={card3} />
                            <Card.Body>
                                <Card.Title>Systemy alarmowe</Card.Title>
                                <br>
                                </br>
                                <Button href="/AlarmSystem" variant="primary">Przejście do Oferty</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Container>
                <Partners />
            </>
        );
    }
}