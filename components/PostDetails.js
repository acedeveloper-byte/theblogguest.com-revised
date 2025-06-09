'use client';
import { LuPencilLine } from "react-icons/lu";
import moment from 'moment';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Card, Image } from 'react-bootstrap';
import Link from "next/link";
import { HOST } from "@/utils/static";
import { FaCalendarAlt, FaUser, FaTag, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import RecentPost from "./RecentPost";

const PostDetails = ({ data }) => {
  const [user, setuser] = useState({});
console.log(data)
  useEffect(() => {
    if (localStorage.getItem('auth_data')) {
      const authData = JSON.parse(localStorage.getItem('auth_data'));
      setuser(authData);
    }
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        <Col md={8}>
          <Card className="mb-4">
            <Image
              src={`${HOST}resources/post/${data.image}`}
              alt={data.title}
              fluid
              className="rounded"
              style={{ height: '400px', width: '100%', objectFit: 'cover' }}
            />
            <Card.Body>
              <div className="mb-3 d-flex flex-wrap gap-4 align-items-center" style={{ fontSize: '0.9rem', color: '#444' }}>
                <div className="d-flex align-items-center gap-1">
                  <FaCalendarAlt color="#1e90ff" />
                  Published on {moment(data.createdAt).format("MMMM Do YYYY")}
                </div>
                <div className="d-flex align-items-center gap-1">
                  <FaUser color="#28a745" />
                  Author: <Link className="text-decoration-none text-black" href={`/members/author/${data.author_name}`}>{data.author_name}</Link>
                </div>
                <div className="d-flex align-items-center gap-1">
                  <FaTag color="#ffc107" />
                  Category: <Link className="text-decoration-none text-black" href={`/category/${data.category}`}>{data.category}</Link>
                </div>

                <div className="ms-auto d-flex gap-3">
                  <a href="#" style={{ color: '#3b5998' }}><FaFacebook size={20} /></a>
                  <a href="#" style={{ color: '#1da1f2' }}><FaTwitter size={20} /></a>
                  <a href="#" style={{ color: '#e1306c' }}><FaInstagram size={20} /></a>
                </div>
              </div>

              <h1 className="fw-bold fs-4">{data.title}</h1>

              <div dangerouslySetInnerHTML={{ __html: data.content }} className="mt-3" />

              {/* {user?._id === data.user_id && (
                <div className="mt-4 d-flex justify-content-end">
                  <Button variant="primary" className="rounded">
                    <Link href={`/post/${data.url}`} className="text-decoration-none text-white">
                      <LuPencilLine size={20} /> Edit
                    </Link>
                  </Button>
                </div>
              )} */}
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          {/* Sidebar Cards */}
          <Card className="mb-4">
            <Row className="g-0">
              <Col xs={4}>
                <Image src={`${HOST}resources/post/${data.image}`} fluid />
              </Col>
              <Col xs={8}>
              {/* <RecentPost/> */}
              {/* <Link href={data.url} className="text-decoration-none"> */}
                <Card.Body>
                  <small className="fw-bold" style={{ color: '#15157cd1' }}>{data.title}</small>
                  <Card.Text className="text-muted small">
                 {moment(data.createdAt).format("MMMM Do YYYY")} / {data.author_name}
                  </Card.Text>
                </Card.Body>
                {/* </Link> */}
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
        </Col>
      </Row>
    </Container>
  );
};

export default PostDetails;
