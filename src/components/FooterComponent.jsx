import React from 'react'
import { Container, Row,} from 'react-bootstrap'

export default function FooterComponent() {
    return (
        <footer className="bg-dark text-white py-4 fix-bottom">
        <Container>
          <Row className="text-center" >
           
              <p>&copy; 2025 TuoNome - Tutti i diritti riservati</p>
        
          </Row>
        </Container>
      </footer>
    )
}
