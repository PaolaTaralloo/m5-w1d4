import React from 'react'
import {Container, Alert} from 'react-bootstrap';

export default function WelcomeAlertComp() {
    return (
        <Container className="mt-4">
            <Alert variant="success">
                <Alert.Heading>Benvenuto in BookShop!!</Alert.Heading>
                <p>
                    Il nostro e-commerce di libri online offre una vasta selezione di titoli per tutti i gusti e le esigenze.
                    Leggere non è mai stato così facile. Scopri nuovi mondi e approfondisci le tue passioni con noi!
                </p>
                <hr />
                <p className="mb-0">
                    Dalla narrativa alla saggistica, dai libri per bambini ai grandi classici, trovi il volume perfetto in pochi click.
                </p>
            </Alert>
        </Container>
    )
}
