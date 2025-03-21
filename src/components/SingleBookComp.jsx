import React, { useState } from 'react';
import { Col, Card } from 'react-bootstrap';
import './SingleBookComp.css';

export default function SingleBookComp({ book }) {

    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        setSelected(!selected);
    };

    // Imposta la classe dinamicamente in base a selected
    let imgClass = 'book-cover';
    if (selected) {
        imgClass += ' selected';
    }

    return (
        <Col key={book.asin} md={3} xs={6} className='my-2'>
            <Card className="mb-4 border h-100" onClick={handleClick}>
                <Card.Img 
                    variant="top"
                    className={imgClass} // Usa la classe dinamica
                    src={book.img}
                    alt={book.title} // Aggiungi un alt per migliorare l'accessibilità
                    
                />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
}
