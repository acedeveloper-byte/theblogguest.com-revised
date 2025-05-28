'use client';
import React from 'react';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { Container, Row, Col, Card, Badge, Image } from 'react-bootstrap';

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
      date: "April 13, 2025",
      badge: "New",
      img: "/images/photo2.jpg",
    },
    {
      title: "Jallianwala Bagh Massacre Remembrance Day 2025 Quotes, Images, Messages, Posters, Banners, Instagram Captions",
      date: "April 13, 2025",
      badge: "New",
      img: "/images/photo3.jpg",
    },
  ];

  const entertainmentPosts = [
    {
      title: "Happy Valentine’s Day 2025 Wishes in Malayalam, Quotes, Messages, Images, Greetings, Sayings, Cliparts and Captions",
      img: "/images/photo1.jpg",
    },
    {
      title: "Happy Valentine’s Day 2025 Wishes for Friends, Quotes, Sayings",
      img: "/images/photo2.jpg",
    },
    {
      title: "Happy Valentine’s Day 2025 Wishes for Greeting, Quotes",
      img: "/images/photo3.jpg",
    },
    {
      title: "50+ Best WhatsApp Status Videos To Download For Free",
      img: "/images/photo1.jpg",
    },
    {
      title: "50+ Best WhatsApp Status Videos To Download For Free",
      img: "/images/photo2.jpg",
    }
  ];

  return (
    <>
      <Header />
      <Container className="my-5">
        <Row>
          {/* Main Content */}
          <Col md={9}>
            <div className="mb-4">
              <h2 className="mb-2">📰 Category: News</h2>
              <p className="text-muted">
                Stay informed with the latest news and updates at The Guest Blogging. Explore trending topics, insightful articles, and breaking news across various categories!
              </p>
            </div>

            <Row>
              {articles.map((article, idx) => (
               <Col md={6} lg={4} className="mb-4" key={idx}>
  <Card className="h-100 shadow-sm border-0 rounded-4">
    <Card.Img
      variant="top"
      src={article.img}
      className="rounded-top-4"
      style={{ height: '250px', objectFit: 'cover' }}
    />
    <Card.Body>
      {article.badge && (
        <Badge  className="mb-2" style={{backgroundColor: '#15157cd1'}}>New</Badge>
      )}
      <Card.Title className="fw-semibold" style={{ fontSize: '1rem' }}>
        {article.title}
      </Card.Title>
      {article.date && (
        <Card.Text className="text-muted" style={{ fontSize: '0.8rem' }}>
          {article.date}
        </Card.Text>
      )}
    </Card.Body>
  </Card>
</Col>

              ))}
            </Row>
          </Col>

          {/* Sidebar */}
          <Col md={3}>
            <div className="mb-4">
              <h4 className="border-bottom pb-2 mb-3">🎬 Entertainment</h4>
              {entertainmentPosts.map((post, i) => (
                <Card key={i} className="mb-3 shadow-sm border-0 rounded-4">
                  <Card.Body className="p-2">
                    <Row className="g-2 align-items-center">
                      <Col xs="auto">
                        <Image
                          src={post.img}
                          alt={post.title}
                          width={50}
                          height={50}
                          rounded
                          style={{ objectFit: 'cover' }}
                        />
                      </Col>
                      <Col>
                        <Card.Title style={{ fontSize: "0.85rem", marginBottom: 0 }}>
                          {post.title}
                        </Card.Title>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default page;
