import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { HOST } from '@/utils/static';
import Link from 'next/link';
import moment from 'moment';

const getData = async () => {
  const res = await fetch(`${HOST}post/fetch-all-post-by-category/Entertainment`, {
    cache: 'no-store', // or revalidate: 60 for ISR
  });
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
};

const Entertainment = async () => {
  let posts = [];

  try {
    const data = await getData();
    posts = (data.response || []).map((item) => ({
      title: item.title || 'Untitled',
      image: item.image ? `${HOST}resources/post/${item.image}` : '/images/default-image.jpg',
      date: item.date || item.createdAt || item.created_at || new Date().toISOString(),
      author_name: item.author_name || item.author || 'Guest Author',
      url: item.url || '/',
      category: item.category || 'Entertainment',
    }));
  } catch (error) {
    console.error('Error fetching posts:', error);
  }

  return (
    <div>
      <h5 className="border-start border-3 border-danger ps-2 mb-3">Entertainment</h5>

      {posts.map((post, index) => (
        <Card key={index} className="text-white mb-3">
          <Card.Img src={post.image} alt={post.title} />
          <Card.ImgOverlay className="bg-dark bg-opacity-50 d-flex flex-column justify-content-end">
            <Button size="sm" className="mb-2 button-layouts">
              {post.category}
            </Button>
            <Card.Title className="fw-bold">
              <Link href={`${post.url}`} className="text-white text-decoration-none">
                {post.title}
              </Link>
            </Card.Title>
            <Card.Text className="small">
              {moment(post.date).format('MMMM D, YYYY')} / {post.author_name}
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      ))}
    </div>
  );
};

export default Entertainment;
