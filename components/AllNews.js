'use client';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Col, Card, Button, Spinner } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <button
    className="position-absolute end-0 top-50 translate-middle-y z-2 btn btn-primary rounded-circle"
    onClick={onClick}
    style={{ right: '-15px' }}>
    ❯
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="position-absolute start-0 top-50 translate-middle-y z-2 btn btn-primary rounded-circle"
    onClick={onClick}
    style={{ left: '-15px' }}
  >
    ❮
  </button>
);

const AllNews = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch('http://localhost:7500/v2/post/fetch-all-post');
        console.log(res)
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();

        console.log("API response:", data); // 🔍 Debug log

        // Adjust this based on your actual API structure
        const formatted = (data.response || data).map((item) => ({
          title: item.title || 'No Title',
          date:  item.date || 'No Date',
          image:  item.image || '/images/default-image.jpg',
        }));

        setNewsItems(formatted);
      } catch (error) {
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Col md={12} className="position-relative">
      <h5 className="border-start border-3 border-danger ps-2 mb-3">Recent News</h5>

      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : newsItems.length === 0 ? (
        <div className="text-center text-muted">No news found.</div>
      ) : (
        <Slider {...settings}>
          {newsItems.map((item, index) => (
            <div key={index}>
              <Link href="/blog" className="text-decoration-none text-white">
                <Card className="text-white">
                  <Card.Img src={item.image} alt={item.title} />
                  <Card.ImgOverlay className="bg-dark bg-opacity-50 d-flex flex-column justify-content-end">
                    <div>
                      <Button size="sm" className="mb-2 news-button-layouts">
                        {item.category}
                      </Button>
                      <Card.Title className="fw-bold">{item.title}</Card.Title>
                      <Card.Text className="small">{item.createdAt}</Card.Text>
                    </div>
                  </Card.ImgOverlay>
                </Card>
              </Link>
            </div>
          ))}
        </Slider>
      )}
    </Col>
  );
};

export default AllNews;
