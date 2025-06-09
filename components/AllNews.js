import React from 'react';
import Slider from 'react-slick';
import { Col, Card, Button } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import { HOST } from '@/utils/static';
import moment from 'moment';

// Custom Arrows
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

// Server-side fetch function
const getData = async () => {
  const res = await fetch(`${HOST}post/fetch-all-post-by-category/Travel`, {
    cache: 'no-store', // or revalidate: 60 for ISR
  });
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
};

const AllNews = async () => {
  let newsItems = [];

  try {
    const data = await getData();

    newsItems = (data.response || data).map((item) => ({
      title: item.title || 'No Title',
      date: item.date || item.createdAt || new Date().toISOString(),
      image: item.image ? `${HOST}resources/post/${item.image}` : '/images/default-image.jpg',
      author_name: item.author_name || 'theblogguest',
      url: item.url || '/',
      category: item.category || 'Travel', // You can adjust category here
    }));
  } catch (error) {
    console.error('Fetch error:', error);
  }

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
          <div key={index}>
            <Link href={`/${item.url}`} className="text-decoration-none text-white">
              <Card className="text-white">
                <Card.Img src={item.image} alt={item.title} />
                <Card.ImgOverlay className="bg-dark bg-opacity-50 d-flex flex-column justify-content-end">
                  <div>
                    <Button size="sm" className="mb-2 news-button-layouts">
                      {item.category}
                    </Button>
                    <Card.Title className="fw-bold">{item.title}</Card.Title>
                    <Card.Text className="small">
                      {moment(item.date).format('MMMM Do YYYY')} / {item.author_name}
                    </Card.Text>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Link>
          </div>
        ))}
      </Slider>
    </Col>
  );
};

export default AllNews;
