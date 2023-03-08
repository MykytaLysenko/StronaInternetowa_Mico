import React, { Component } from 'react'
import { Container, Form, FormControl, FormGroup, Button } from 'react-bootstrap'

export default class Home extends Component {
    render() {
        return (
    
            <Container style={{ width: "500px", height: '440px' }}>
                <h1 className="text-center m-4">Contact us</h1>
                <Form className="m-4">
                    <FormGroup controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <FormControl type="email" placeholder="Enter email" />
                    </FormGroup>
                    <FormGroup controlId="formBasicPassword">
                        <Form.Label>Pole do kontaktu</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </FormGroup>

                    <FormGroup controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </FormGroup>
                    <Button variant="primary" type="submit">Wyślij</Button>
                </Form>
            </Container>
        )
    }

}