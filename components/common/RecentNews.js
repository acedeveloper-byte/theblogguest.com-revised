'use client'
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import Travels from "./Travels";
import Fashion from "./Fashion";
import Entertainment from "./Entertainment";
import Education from "./Education";
import AllNews from "../AllNews";

const RecentNews = () => {
  return (
    <Container className="my-4">
      <Row>
        <Col md={6}>
         <AllNews/>
          <Row>
            <Col md={12}>
              <Travels />
            </Col>
          </Row>

        </Col>
        <Col md={6} className="">
        <Row className="">
            <Col md={6}>
              <Fashion />

            </Col>

            <Col md={6}>
              <Entertainment />
            </Col>
          </Row>
          <Education />
          
        </Col>




      </Row>
    </Container>
  );
};

export default RecentNews;

