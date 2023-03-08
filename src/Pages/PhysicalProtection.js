import React, { Component } from 'react'
import { Card, Container, Tab } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Partners from '../Components/Partners';
import CarouselBox from "../Components/CarouselBox";
import img1 from "../assets/galeria/05.jpg"



export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox />

                <Container style={{ marginTop: "20px", width: "70rem" }}>
                    <Card>
                        <Card.Body>
                            <Card.Title className="text-center m-3">Ochrona Fizyczna
                            </Card.Title>
                            <Card.Text>

                                <p> Podstawowym zadaniem Centrum Ochrony i Zabezpieczeń MIKO jest dostarczenie zleceniodawcy kompleksowej usługi gwarantującej bezpieczeństwo osób oraz ochronę mienia. Ochrona stacjonarna realizowana jest zgodnie z indywidualnie przygotowanym systemem, uzależnionym od rodzaju chronionego obiektu.</p>

                                <p>Każdy system który powstaje jest specjalnie przygotowany do potrzeb klienta przy uwzględnieniu specyfikacji danego obiektu. Podstawą do sporządzenia planu ochrony jest wykonanie przez naszych specjalistów wizji lokalnej obiektu, wyodrębnienie poszczególnych stref bezpieczeństwa, identyfikacja zagrożeń a następnie opracowanie procedur eliminujących zagrożenia zidentyfikowane oraz wdrożenie systemu przeciwdziałania potencjalnym zagrożeniom.</p>

                                <p> Centrum ochrony i zabezpieczeń MIKO specjalizuje się w ochronie następujących obiektów:</p>

                                <ul>
                                    <li>obiekty handlowe</li>
                                    <li>obiekty przemysłowe</li>
                                    <li>obiekty użyteczności publicznej</li>
                                    <li>hale magazynowe</li>
                                    <li>domy jednorodzinne</li>
                                    <li>budowy</li>
                                    <li>budowy</li>
                                </ul>

                               <p> Według potrzeb klienta nasza firma jest w stanie zapewnić ochronę na innym obiekcie który będzie przedmiotem umowy. Wszelkie szczegóły oraz zagadnienia zostaną ustalone bezpośrednio z kontrahentem aby sprostać jego najwyższym wymaganiom.</p>

                               <b> Ochrona VIP </b>

                              <p>  Dzięki wyspecjalizowanej kadrze pracowników którzy potrafią zachować zimną krew w każdej sytuacji możemy zaoferować Państwu ochronę osobistą (VIP). Tego rodzaju usługi mają na celu zapewnienie nietykalności osobistej oraz ochronę zdrowia danej osoby. Każdy z naszych pracowników który zostanie przydzielony do tego typu zadań cechuje się wysoką sprawnością fizyczną, przewidywaniem zagrożeń , zna co najmniej jeden język obcy w stopniu komunikatywnym oraz potrafi dostosować się do każdej sytuacji.</p>

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