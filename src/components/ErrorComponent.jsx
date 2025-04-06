import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './ErrorComponent.css';
import errorImage from '../assets/404.png';
import { useNavigate } from 'react-router-dom';

function ErrorComponent() {

  const navigate = useNavigate();

  const handleClick = () => {
              navigate('/Homepage');

  }

  return (
    <> 
   
 <Container fluid className="d-flex align-items-start justify-content-center  background">
      <Row className="text-center ">
        <Col sm= {12}  className='d-flex justify-content-center align-items-center mt-5'>
        <img src={errorImage} alt="Error-404" className='imgCustom' />
        </Col>
        <Col sm= {12} className='d-flex justify-content-center align-items-center '>
          <div className="mt-4 text-center">
            <h1>Error-404</h1>
            <p>Oops! La pagina che stai cercando non esiste.</p>
            <p>
              <Button variant="primary"  className="btnCustom" onClick={handleClick}>
                Torna alla Home
              </Button>
            </p>
          </div>
        </Col>
      </Row>
    </Container>


    {/* <Container fluid className="d-flex align-items-start justify-content-center  background">
      <Row className="text-center ">
        <Col sm={12} md={3} className='d-flex justify-content-center align-items-center mt-5'>
        <img src={errorImage} alt="Error-404" className='w-100' />
        </Col>
        <Col sm={12} md={9} className='d-flex justify-content-start align-items-center ps-5'>
          <div className="mt-4 text-start">
            <h1>Error - 404</h1>
            <p>Oops! La pagina che stai cercando non esiste.</p>
            <p>
              <Button variant="primary" onClick={handleClick}>
                Torna alla Home
              </Button>
            </p>
          </div>
        </Col>
      </Row>
    </Container> */}
    </> 

  );
}

export default ErrorComponent;