'use client'
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaCalendarAlt, FaUser, FaTag, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const page = () => {
  return (
    <>
      <Header />
      <Container className="mt-4">
        <Row>
          <Col md={8}>
            <Card className="mb-4">
              <Image
                src="https://cdn.pixabay.com/photo/2017/03/16/05/23/kirkjufell-2148191_1280.jpg"
                alt="Jallianwala Bagh Memorial"
                fluid
                className="rounded"
                style={{ height: '400px', width: '100%' }}
              />
              <Card.Body>
                <div
                  className="mb-3 d-flex flex-wrap gap-4 align-items-center"
                  style={{ fontSize: '0.9rem', color: '#444' }}
                >
                  <div className="d-flex align-items-center gap-1">
                    <FaCalendarAlt color="#1e90ff" /> {/* DodgerBlue */}
                    Published on April 13, 2025
                  </div>
                  <div className="d-flex align-items-center gap-1">
                    <FaUser color="#28a745" /> {/* Green */}
                    Author: Editor
                  </div>
                  <div className="d-flex align-items-center gap-1">
                    <FaTag color="#ffc107" /> {/* Amber/Yellow */}
                    Category: History
                  </div>

                  <div className="ms-auto d-flex gap-3">
                    <a href="" target="_blank" rel="noopener noreferrer" style={{ color: '#3b5998' }}>
                      <FaFacebook size={20} />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer" style={{ color: '#1da1f2' }}>
                      <FaTwitter size={20} />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer" style={{ color: '#e1306c' }}>
                      <FaInstagram size={20} />
                    </a>
                  </div>
                </div>

                <h1 className="fw-bold fs-4">
                  Jallianwala Bagh Massacre Remembrance Day 2025 Quotes, Images, Messages, Posters, Banners, Slogans and Instagram Captions
                </h1>

                <Card.Text>
                  Every year, 13 April is celebrated as Jallianwala Bagh Memorial Day. It has been 106 years since that black day in Indian history. The Jallianwala Bagh massacre took place in 1919 when peaceful protestors gathered at Jallianwala Bagh in Amritsar were fired upon by British troops, leading to the death of hundreds of innocent people.
                </Card.Text>
                <Card.Text>
                  On 13 April 1919, troops under command of Colonel Reginald Dyer opened fire on a crowd of unarmed civilians, including women and children. This massacre became a turning point in India’s struggle for independence. Every year, this day is remembered with quotes, messages, and images shared across the country.
                </Card.Text>
                <Card.Text>
                  Here you will find a collection of quotes, slogans, messages, and social media captions to honor those who lost their lives in this tragedy.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
            <Col md={4}>
          <Card className="mb-4">
            <Row className="g-0">
              <Col xs={4}>
                <Image src="https://cdn.pixabay.com/photo/2022/04/12/18/00/europe-7128531_1280.jpg" fluid />
              </Col>
              <Col xs={8}>
                <Card.Body>
                  <small className=" fw-bold" style={{color: '#15157cd1'}}>ENTERTAINMENT NEWS</small>
                  <div className="text-uppercase  fw-bold small" style={{color: '#15157cd1'}}>SHAYARI & QUOTES | VALENTINE WEEK</div>
                  <Card.Title className="fs-6">
                    Happy Valentine’s Day 2025 Wishes for Fiance; Quotes, Images, Messages, Greetings, Sayings and Captions
                  </Card.Title>
                  <Card.Text className="text-muted small">
                    February 12, 2025 / Admin
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          <Card className="mb-4">
            <Row className="g-0">
              <Col xs={4}>
                <Image src="https://cdn.pixabay.com/photo/2019/08/28/14/24/tokyo-4436914_1280.jpg" fluid />
              </Col>
              <Col xs={8}>
                <Card.Body>
                  <small className=" fw-bold" style={{color: '#15157cd1'}}>ENTERTAINMENT NEWS</small>
                  <div className="fw-bold small" style={{color: '#15157cd1'}}>SHAYARI & QUOTES | VALENTINE WEEK</div>
                  <Card.Title className="fs-6">
                    Happy Valentine’s Day 2025 Wishes in Bengali, Quotes, Messages, Images, Greetings, Sayings, Cliparts and Instagram Captions
                  </Card.Title>
                  <Card.Text className="text-muted small">
                    February 12, 2025 / Admin
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default page;
