import React, { useState } from 'react';
import { Col, Card } from 'react-bootstrap';
import './SingleBookComp.css';
// import CommentAreaComp from './CommentAreaComp';

function SingleBookComp({ book, selected, setSelected }) {
    // const [selected, setSelected] = useState(false);
    // console.log(selected);

    // const handleClick = () => {
    //     console.log('Clicked, selected:', !selected); //verifica che il click funzioni
    //     setSelected(!selected);
    // };

    return (
        <Col key={book.asin} md={3} xs={6} className="my-2">
            <div>
                {/* <Card
                    className="mb-4 h-100 card-custom"
                    onClick={handleClick}
                    style={{
                        border: selected ? '3px solid red' : '1px solid grey',
                    }}
                > */}

                <Card
                    className="mb-4 h-100 card-custom"
                    onClick={() => setSelected(book.asin)}
                    style={{
                        border: selected === book.asin ? '3px solid red' : '1px solid grey',
                    }}
                >
                    <Card.Img
                        variant="top"
                        src={book.img}
                        alt={book.title}
                    />
                    <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                    </Card.Body>
                </Card>
                {/* <Row>
                    {selected && <CommentAreaComp book={book} asin={book.asin} />}
                </Row> */}
            </div>
        </Col>
    );
}

export default SingleBookComp;
