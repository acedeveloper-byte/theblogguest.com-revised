import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const Education = () => {
  return (
    <div className="container mt-4">
      <Row className="g-2 border p-2">
        {/* Thumbnail Image */}
        <Col xs={4} md={3}>
          <Image 
            src="/images/photo3.jpg" 
            alt="Virtual Assistant" 
            fluid 
          />
        </Col>

        {/* Text Content */}
        <Col xs={8} md={9}>
          <small className="text-danger fw-bold">Education</small>
          <h6 className="fw-bold mb-1">
            The Top 5 Benefits of Hiring a Virtual Assistant
          </h6>
          <small className="text-muted">August 2, 2024 / Admin</small>
        </Col>
      </Row>
       <Row className="g-2 border p-2">
        {/* Thumbnail Image */}
        <Col xs={4} md={3}>
          <Image 
            src="/images/photo3.jpg" 
            alt="Virtual Assistant" 
            fluid 
          />
        </Col>

        {/* Text Content */}
        <Col xs={8} md={9}>
          <small className="text-danger fw-bold">Education</small>
          <h6 className="fw-bold mb-1">
            The Top 5 Benefits of Hiring a Virtual Assistant
          </h6>
          <small className="text-muted">August 2, 2024 / Admin</small>
        </Col>
      </Row>
      <Row className="g-2 border p-2">
        {/* Thumbnail Image */}
        <Col xs={4} md={3}>
          <Image 
            src="/images/photo3.jpg" 
            alt="Virtual Assistant" 
            fluid 
          />
        </Col>

        {/* Text Content */}
        <Col xs={8} md={9}>
          <small className="text-danger fw-bold">Education</small>
          <h6 className="fw-bold mb-1">
            The Top 5 Benefits of Hiring a Virtual Assistant
          </h6>
          <small className="text-muted">August 2, 2024 / Admin</small>
        </Col>
      </Row>
    </div>
  );
};

export default Education;
