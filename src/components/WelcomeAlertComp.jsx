import React from 'react'
import { Container, Row, Col, Alert, Button } from 'react-bootstrap';

import './WelcomeAlertComp.css';
import booksJumb from '../assets/booksJumb.png';

export default function WelcomeAlertComp() {
    return (

        <>
            <Container fluid id='jumbtron' className='mb-5'>
                <Container>
                <Row className='align-items-center'>
                    <Col sm={12} md={6} >
                        <Alert.Heading className='mb-0 p-0'>Benvenuto</Alert.Heading>
                        <Alert.Heading className='m-0 p-0'>in EpicBook Library!</Alert.Heading>
                        <p>
                            Leggere non è mai stato così facile. <br/>Scopri nuovi mondi e approfondisci le tue passioni con noi!
                        </p>
                        <hr />
                        <Button className="mb-2 btnCustom" >
                           Scopri di più
                        </Button>
                    </Col>
                    <Col sm={12} md={6} className='text-center'>
                        {/* <img src="/assets/booksJumb.png" alt="Books" className='img-fluid' /> */}
                        <img src={booksJumb} alt="Books" className='img' />
                    </Col>
                </Row>
                </Container>
            </Container>
        </>
    )
}
