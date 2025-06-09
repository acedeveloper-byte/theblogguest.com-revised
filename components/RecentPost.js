import { HOST } from '@/utils/static';
import { Link } from 'lucide-react';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Card, Image } from 'react-bootstrap';


const RecentPost = () => {
       const [data, setData] = useState([])
   
useEffect(() => {
  const category = 'Travel'; // you can make this dynamic if needed

  fetch(`${HOST}fetch-all-post-by-category/${category}`)
    .then(response => response.json())
    .then(data => {
      setRecentPosts(data.posts); // adjust key if your API response differs
    })
    .catch(error => {
      console.error('Error fetching recent posts by category:', error);
    });
}, []);
  return (
    <div>
       <Card className="mb-4">
            <Row className="g-0">
              <Col xs={4}>
                <Image src={data.image} fluid />
              </Col>
              <Col xs={8}>
              <Link href={data.url} className="text-decoration-none">
                <Card.Body>
                  <small className="fw-bold" style={{ color: '#15157cd1' }}>{data.title}</small>
                  <Card.Text className="text-muted small">
                 {moment(data.createdAt).format("MMMM Do YYYY")} / {data.author_name}
                  </Card.Text>
                </Card.Body>
                </Link>
              </Col>
            </Row>
          </Card>

          {/* <Card className="mb-4">
            <Row className="g-0">
              <Col xs={4}>
                <Image src="https://cdn.pixabay.com/photo/2019/08/28/14/24/tokyo-4436914_1280.jpg" fluid />
              </Col>
              <Col xs={8}>
                <Card.Body>
                  <small className="fw-bold" style={{ color: '#15157cd1' }}>ENTERTAINMENT NEWS</small>
                  <div className="fw-bold small" style={{ color: '#15157cd1' }}>SHAYARI & QUOTES | VALENTINE WEEK</div>
                  <Card.Title className="fs-6">
                    Happy Valentine’s Day 2025 Wishes in Bengali...
                  </Card.Title>
                  <Card.Text className="text-muted small">
                    February 12, 2025 / Admin
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card> */}
    </div>
  )
}

export default RecentPost
