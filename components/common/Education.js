import React from 'react';
import { Row, Col, Image, Spinner } from 'react-bootstrap';
import { HOST } from '@/utils/static';
import moment from 'moment';

const getData = async () => {
  const res = await fetch(`${HOST}post/fetch-all-post-by-category/Education`, {
    cache: 'no-store', // or revalidate: 60 for ISR
  });
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
};

const Education = async () => {
  let posts = [];

  try {
    const data = await getData();
    posts = (data.response || []).slice(0, 3).map(item => ({
      title: item.title || 'Untitled',
      image: item.image ? `${HOST}resources/post/${item.image}` : '/images/default-image.jpg',
      date: item.date || item.createdAt || new Date().toISOString(),
      author_name: item.author_name || item.author || 'Admin',
      category: item.category || 'Education',
      url: item.url || '/',
    }));
  } catch (error) {
    console.error('Error fetching Education posts:', error);
  }

  if (posts.length === 0) {
    return <p>No posts available</p>;
  }

  return (
    <div className="container mt-4">
      {posts.map((post, index) => (
        <Row key={index} className="g-2 border p-2 mb-2">
          {/* Thumbnail Image */}
          <Col xs={4} md={3}>
            <a href={post.url}>
              <Image src={post.image} alt={post.title} fluid />
            </a>
          </Col>

          {/* Text Content */}
          <Col xs={8} md={9}>
            <small className="text-danger fw-bold">{post.category}</small>
            <h6 className="fw-bold mb-1">
              <a href={post.url} className="text-decoration-none text-dark">{post.title}</a>
            </h6>
            <small className="text-muted">
              {moment(post.date).format('MMMM D, YYYY')} / {post.author_name}
            </small>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Education;
