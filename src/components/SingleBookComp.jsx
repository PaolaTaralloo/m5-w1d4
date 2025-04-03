import React, { useState } from 'react';
import { Col, Card } from 'react-bootstrap';
import './SingleBookComp.css';


function SingleBookComp({ book, selected, setSelected }) {
   

    return (
        <Col key={book.asin} md={3} xs={6} className="my-2">
            <div>
                

                <Card
                    className="mb-4 h-100 card-custom"
                    onClick={() => setSelected(book.asin)}
                    style={{
                        border: selected === book.asin ? '3px solid red' : '1px solid grey',
                    }}
                >
                    <Card.Img
                        className="card-img-top"
                        variant="top"
                        src={book.img}
                        alt={book.title}
                    />
                    <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        
                    </Card.Body>
                </Card>
            
            </div>
        </Col>
    );
}

export default SingleBookComp;
