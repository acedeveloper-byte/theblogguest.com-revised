'use client';

import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Badge, Image } from 'react-bootstrap';
import { HOST } from '@/utils/static';

const CategoryDetails = () => {
  const pathname = usePathname(); // e.g. "/category/news"
  const [categoryName, setCategoryName] = useState('');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Extract category name from URL path, assuming /category/[categoryname]
    const parts = pathname?.split('/');
    const cat = parts && parts.length > 2 ? parts[2] : '';
    setCategoryName(cat);

    if (cat) {
      const fetchPosts = async () => {
        setLoading(true);
        try {
          const res = await fetch(`${HOST}post/fetch-all-post-by-category/${cat}`, {
            cache: 'no-store',
          });
          if (!res.ok) throw new Error('Failed to fetch posts');
          const data = await res.json();
          setArticles(data.response || []);
        } catch (error) {
          console.error('Error fetching posts:', error);
          setArticles([]);
        } finally {
          setLoading(false);
        }
      };

      fetchPosts();
    }
  }, [pathname]);

  // Sidebar dummy data (same as before)
  const entertainmentPosts = [
    {
      title: "Happy Valentine’s Day 2025 Wishes in Malayalam, Quotes, Messages, Images, Greetings, Sayings, Cliparts and Captions",
      img: "/images/photo1.jpg",
    },
    // ... same as before
  ];

  return (
    <Container className="my-5">
      <Row>
        <Col md={9}>
          <div className="mb-4">
            <h2 className="mb-2">📰 Category: {categoryName}</h2>
        
          </div>

          {loading ? (
            <p>Loading posts...</p>
          ) : articles.length === 0 ? (
            <p>No posts found for this category.</p>
          ) : (
            <Row>
              {articles.map((article, idx) => (
                <Col md={6} lg={4} className="mb-4" key={idx}>
                  <Card className="h-100 shadow-sm border-0 rounded-4">
                    <Card.Img
                      variant="top"
                      src={`${HOST}resources/post/${article.image || 'default-image.jpg'}`}
                      className="rounded-top-4"
                      style={{ height: '250px', objectFit: 'cover' }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/images/default-image.jpg';
                      }}
                    />
                    <Card.Body>
                      {article.badge && (
                        <Badge className="mb-2" style={{ backgroundColor: '#15157cd1' }}>
                          {article.badge}
                        </Badge>
                      )}
                      <Card.Title className="fw-semibold" style={{ fontSize: '1rem' }}>
                        {article.title || 'Untitled'}
                      </Card.Title>
                      {article.createdAt && (
                        <Card.Text className="text-muted" style={{ fontSize: '0.8rem' }}>
                          {new Date(article.createdAt).toLocaleDateString()}
                        </Card.Text>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Col>

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
  );
};

export default CategoryDetails;
