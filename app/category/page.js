'use client';
import React from 'react';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

const page = () => {
  const articles = [
    {
      title: "50+ Best WhatsApp Status Videos To Download For Free",
      date: "April 13, 2025",
      badge: "New",
      img: "/images/photo1.jpg",
    },
    {
      title: "Vishu 2025 Wishes in Malayalam: Kerala New Year Quotes, Greetings, Images, Messages, and Instagram Captions",
      badge: "New",
      img: "/images/photo2.jpg",
    },
    {
      title: "Jallianwala Bagh Massacre Remembrance Day 2025 Quotes, Images, Messages, Posters, Banners, Instagram Captions",
      badge: "New",
      img: "/images/photo3.jpg",
    },
   
   
  ];

  const entertainmentPosts = [
    {
      title: "Happy Valentine’s Day 2025 Wishes in Malayalam, Quotes, Messages, Images, Greetings, Sayings, Cliparts and Captions",
          img: "/images/photo1.jpg",

    },
    "Happy Valentine’s Day 2025 Wishes for Friends, Quotes, Sayings",
    "Happy Valentine’s Day 2025 Wishes for Greeting, Quotes",
    "50+ Best WhatsApp Status Videos To Download For Free",
    "50+ Best WhatsApp Status Videos To Download For Free"
  ];

  return (
    <>
      <Header />
      <Container className="my-5">
        <Row>
          <Col md={9}>
            <h3>Category: News</h3>
            <p>Stay informed with the latest news and updates at The Guest Blogging. Explore trending topics, insightful articles, and breaking news across various categories!</p>
            <Row>
              {articles.map((article, idx) => (
                <Col md={4} className="mb-4" key={idx}>
                  <Card className="h-100">
                    <Card.Img variant="top" src={article.img} />
                    <Card.Body>
                      {article.badge && (
                        <Badge bg="danger" className="mb-2">New</Badge>
                      )}
                      <Card.Title style={{ fontSize: '1rem' }}>{article.title}</Card.Title>
                      {article.date && (
                        <Card.Text style={{ fontSize: '0.8rem' }}>{article.date}</Card.Text>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>

          <Col md={3}>
            <h5>Entertainment</h5>
            <Card className="mb-3">
              <Card.Img variant="top" src={entertainmentPosts[0].img} />
              <Card.Body>
                <Card.Title style={{ fontSize: "0.95rem" }}>
                  {entertainmentPosts[0].title}
                </Card.Title>
              </Card.Body>
            </Card>
            <ul style={{ paddingLeft: "20px", fontSize: "0.85rem" }}>
              {entertainmentPosts.slice(1).map((post, i) => (
                <li key={i} className="mb-2">{post}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default page;
