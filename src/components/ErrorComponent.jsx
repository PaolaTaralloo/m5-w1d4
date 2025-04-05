import React from 'react'
import { Container } from 'react-bootstrap'

function ErrorComponent() {
  return (
    <Container>
      console.error('Page not found');
    </Container>
  )
}

export default ErrorComponent