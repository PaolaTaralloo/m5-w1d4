import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fantasyBooks from '../data/fantasy.json';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './DetailBookComp.css';
import { BsHeart, BsShare } from "react-icons/bs";

const allBooks = [...fantasyBooks];

function DetailBookComp() {

  const { asin } = useParams();
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    const book = allBooks.find((book) => book.asin === asin);
    setBookDetails(book);
  }, [asin]);

  if (!bookDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='main-content'>
      <Container className='mt-5 mb-5 d-flex justify-content-center align-items-center'  >
        <Row className='gy-5'>
          <Col sm={12} md={6} className='d-flex justify-content-center align-items-center '>

            <img
              className="img-container w-50 "
              variant="top"
              src={bookDetails.img}
            />

          </Col >
          <Col sm={12} md={6} className='px-4'>
            <Row>
              <Col  >
                <span>LIBRO | Cetegoria: {bookDetails.category}</span>
              </Col>

              <Col>
                <div className='d-flex justify-content-end gap-3'>
                  <BsHeart className='font-size' />
                  <BsShare className='font-size' />
                </div>
              </Col>
            </Row>
            <Row>
              <Card.Title className='mt-4 mb-1'>{bookDetails.title}</Card.Title>
              < span className='text-muted'>di<span className='text-decoration-underline'> Mario Rossi</span> | Casa editrice: <span className='text-decoration-underline'> Casa dei Libri</span> </span>
            </Row>
            <Row className='px-2'>
            <Button variant="success" className='mt-5 w-50 ms-1 '>Aggiungi al carrello</Button>
            </Row>
          </Col >
        </Row>
      </Container >
      </div>

    </>
  )
}
export default DetailBookComp