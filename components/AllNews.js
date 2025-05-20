'use client';
import React from 'react';
import Slider from 'react-slick';
import { Col, Row, Card, Button } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// 👉 Custom Arrows
const NextArrow = ({ onClick }) => (
  <button
    className="position-absolute end-0 top-50 translate-middle-y z-2 btn btn-primary rounded-circle"
    onClick={onClick}
    style={{ right: '-15px' }}
  >
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
  const newsItems = [
    {
      title:
        'Eid al-Adha 2025 Wishes in Arabic; Quotes, Greetings, Images, Messages, Posters, Banners and Instagram Captions',
      date: 'May 19, 2025 / Veer',
      image: '/images/dynamic-image.jpg',
    },
    {
      title: 'Breaking: Government announces new digital ID system rollout',
      date: 'May 18, 2025 / Staff',
      image: '/images/dynamic-image.jpg',
    },
    {
      title: 'International Yoga Day: Top health tips you should follow',
      date: 'May 17, 2025 / Health Desk',
      image: '/images/dynamic-image.jpg',
    },
  ];

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

      <Slider {...settings}>
        {newsItems.map((item, index) => (
          <Card className="text-white" key={index}>
            <Card.Img src={item.image} alt={item.title} />
            <Card.ImgOverlay className="bg-dark bg-opacity-50 d-flex flex-column justify-content-end">
              <div>
                <Button size="sm" className="mb-2 news-button-layouts">
                  NEWS
                </Button>
                <Card.Title className="fw-bold">{item.title}</Card.Title>
                <Card.Text className="small">{item.date}</Card.Text>
              </div>
            </Card.ImgOverlay>
          </Card>
        ))}
      </Slider>

     
    </Col>
  );
};

export default AllNews;
