import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './SingleBookComp.css';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../modules/context';
import { useContext } from 'react';

function SingleBookComp({ book, selected, setSelected }) {
   const [theme] = useContext(ThemeContext)
   const navigate = useNavigate();

    const handleClick = (asin) => {
        navigate('/Detailpage/' + asin);
    };

    return (
        <div>
            <Card
                className="mb-2 card-custom"
                onClick={() => setSelected(selected === book.asin ? null : book.asin)}
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
            <Button variant="outline-primary" className='btnCustom' onClick={() => handleClick(book.asin)}>
                Scopri di più
            </Button>
        </div>
    );
}

export default SingleBookComp;
