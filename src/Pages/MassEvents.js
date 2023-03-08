import React, { Component } from 'react'
import { Card, Container } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Partners from '../Components/Partners';
import CarouselBox from "../Components/CarouselBox";
import img1 from "../assets/galeria/02.jpg"



export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox />
                <Container style={{ marginTop: "20px", width: "70rem" }}>
                    <Card>
                        <Card.Body>
                            <Card.Title className="text-center m-3">Imprezy masowe
                            </Card.Title>
                            <Card.Text>
                                Od początku istnienia firmy specjalizujemy się w ochronie imprez masowych. W naszej ofercie mamy pełen wachlarz usług miedzy innymi ochronę koncertów, ochronę osobistą artystów, targów, hal wystawowych, meczy piłkarskich, spotkań żużlowych, imprez plenerowych takich jak festyny, dni miast, dożynki . Firma Miko zapewniała bezpieczeństwo w takich miejscach jak : Chmielaki Krasnostawskie, Tytoniaki Łukowa, Trasa Ogólnopolskiej Nocy Kabaretowej w województwie lubelskim, Dni Miasta Lubartów, Biesiada Sierpniowa, mecze żużlowe KMŻ Motor Lublin , Święto Owoców Miękkich w Kraśniku oraz wiele innych imprez które obsłużyliśmy na przeciągu kilku lat.
                                Naszym priorytetem jest zadowolenie klientów więc dokładamy wszelkich starań aby każde zlecenie zostało wykonane z najwyższą precyzją.
                            </Card.Text>
                            <Card.Img variant="top" src={img1}>
                            </Card.Img>
                        </Card.Body>

                    </Card>
                </Container>

                <Partners />
            </>
        )
    }

}