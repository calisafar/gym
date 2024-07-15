import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
function Footer1() {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <Container>
        <Row>
          <Col>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Amazon logo"
            />
            <p className="mt-3">
              &copy; {new Date().getFullYear()} Amazon. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer1