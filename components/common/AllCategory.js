'use client';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categories = [
  { name: "Technology", image: "/images/photo3.jpg" },
  { name: "Healthy Lifestyle", image: "/images/photo3.jpg" },
  { name: "Fashion", image: "/images/photo3.jpg" },
  { name: "Business", image: "/images/photo3.jpg" },
  { name: "Design", image: "/images/photo3.jpg" },
  { name: "Education", image: "/images/photo3.jpg" },
];

// Shared arrow button inline styles (no !important)
const arrowStyle = {
  padding: '3px 10px',
  border: '0px',
  background: '#15157cd1',
  color: '#fff',
  cursor: 'pointer',
  margin: '2px'
};

const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full shadow-md hover:opacity-90 focus:outline-none"
    onClick={onClick}
    aria-label="Next"
    style={arrowStyle}
  >
    <FiArrowRight size={24} />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full shadow-md hover:opacity-90 focus:outline-none"
    onClick={onClick}
    aria-label="Previous"
    style={arrowStyle}
  >
    <FiArrowLeft size={24} />
  </button>
);

const AllCategory = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="relative p-4">
      <Slider {...settings}>
        {categories.map((cat, index) => (
          <div key={index} className="relative px-2">
            <Image
              src={cat.image}
              alt={cat.name}
              width={310}
              height={180}
              className="rounded-lg object-cover w-full h-[150px]"
            />
            <div
              className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center px-3 text-center"
            >
              <span className="text-white text-lg font-bold">{cat.name}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AllCategory;
