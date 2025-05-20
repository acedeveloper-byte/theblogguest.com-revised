import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Sales from './Sales';

const Travels = () => {
  return (
    <div className="container mt-4">
      <Row>
        {/* Travales Column */}
        <Col md={6}>
          <h5 className="mb-3">Travales</h5>
          <Card className="text-white mb-3">
            <Card.Img src="/images/photo3.jpg" alt="Photo 1" />
            <Card.ImgOverlay className="bg-dark bg-opacity-50 d-flex flex-column justify-content-end">
              <div>
                <Button size="sm" className="mb-2 news-button-layouts">Travales</Button>
                <Card.Title className="fw-bold">
                  RaaLaxmi in yellow bikini – Julie 2 actress flaunted her sexy figure
                </Card.Title>
                <Card.Text className="small">April 7, 2025 / Admin</Card.Text>
              </div>
            </Card.ImgOverlay>
          </Card>

          <Card className="text-white mb-3">
            <Card.Img src="/images/photo3.jpg" alt="Photo 2" className='tarvels-image-layout'/>
            <Card.ImgOverlay className="bg-dark bg-opacity-50 d-flex flex-column justify-content-end">
              <div>
                <Button size="sm" className="mb-2 news-button-layouts">Travales</Button>
                <Card.Title className="fw-bold">
                  Pragya Jaiswal in stylish pink outfit looked stunning
                </Card.Title>
                <Card.Text className="small">April 6, 2025 / Xorch</Card.Text>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Col>

        {/* Hot Photos Column */}
        <Col md={6}>
        <Sales/>
               </Col>
      </Row>
    </div>
  );
};

export default Travels;
