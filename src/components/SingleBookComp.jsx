import React from 'react';
import { Col, Card, } from 'react-bootstrap';

export default function SingleBookComp({book}) {
  return (
    <Col key={book.asin} md={3} xs={6}>
      <Card className="mb-4">
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  )
}