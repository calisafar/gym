import React from 'react';
import { Container, Row, Col, Card, Button, } from 'react-bootstrap';
import image1 from '../images/trainer-img1.png';
import image2 from '../images/trainer-img2.png';
import image3 from '../images/trainer-img3.png';
import image4 from '../images/trainer-img4.png';
function Cards() {
  return (
    <div className="App">
      <Container fluid className="main-bg">
        <Row className="justify-content-center">
          <Col md="8">
            <h1 className="text-center text-white">Amazon Products</h1>
            <Row>
              <Col md="3">
                <Card    className="mb-4 product-card">
                  <Card.Img variant="top"src={image3}  alt="Product 1" />
                  <Card.Body>
                    <Card.Title>Amazon Echo Dot</Card.Title>
                    <Card.Text>Smart speaker with Alexa.</Card.Text>
                    <Button variant="primary" href="https://www.amazon.com/dp/B07FZ8S74R">Buy Now</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md="3">
                <Card    className="mb-4 product-card">
                  <Card.Img variant="top" src={image2}  alt="Product 2" />
                  <Card.Body>
                    <Card.Title>Fire TV Stick</Card.Title>
                    <Card.Text>Streaming media player with Alexa voice remote.</Card.Text>
                    <Button variant="primary" href="https://www.amazon.com/dp/B08C1W5N87">Buy Now</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md="3">
                <Card   className="mb-4 product-card">
                  <Card.Img variant="top" src={image1} alt="Product 3" />
                  <Card.Body>
                    <Card.Title>Kindle Paperwhite</Card.Title>
                    <Card.Text>Waterproof e-reader with a 6" display.</Card.Text>
                    <Button variant="primary" href="https://www.amazon.com/dp/B08N36XNTT">Buy Now</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md="3">
                <Card   className="product-card">
                  <Card.Img variant="top" src={image4}  alt="Product 4" />
                  <Card.Body>
                    <Card.Title>AmazonBasics AA Batteries</Card.Title>
                    <Card.Text>48-pack of high-performance AA batteries.</Card.Text>
                    <Button variant="primary" href="https://www.amazon.com/dp/B00O869KJE">Buy Now</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default Cards;
