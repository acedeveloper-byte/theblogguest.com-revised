import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { HOST } from '@/utils/static';
import moment from 'moment';

const getData = async () => {
  const res = await fetch(`${HOST}post/fetch-all-post-by-category/Sales`, {
    cache: 'no-store', // or revalidate: 60 for ISR
  });
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
};

const Sales = async () => {
  let posts = [];

  try {
    const data = await getData();
    posts = (data.response || []).slice(0, 2).map(item => ({
      title: item.title || 'Untitled',
      image: item.image ? `${HOST}resources/post/${item.image}` : '/images/default-image.jpg',
      date: item.date || item.createdAt || item.created_at || new Date().toISOString(),
      author_name: item.author_name || item.author || 'Admin',
      url: item.url || '/',
      category: item.category || 'Sales',
    }));
  } catch (error) {
    console.error('Error fetching Sales posts:', error);
  }

  return (
    <div>
      <h5 className="border-start border-3 border-danger ps-2 mb-3">Sales</h5>

      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        posts.map((post, index) => (
          <Card key={index} className="text-white mb-3">
            <Card.Img src={post.image} alt={post.title} />
            <Card.ImgOverlay className="bg-dark bg-opacity-50 d-flex flex-column justify-content-end">
              <div>
                <Button size="sm" className="mb-2 news-button-layouts">{post.category}</Button>
                <Card.Title className="fw-bold">
                  <a href={post.url} className="text-white text-decoration-none">{post.title}</a>
                </Card.Title>
                <Card.Text className="small">{moment(post.date).format('MMMM D, YYYY')} / {post.author_name}</Card.Text>
              </div>
            </Card.ImgOverlay>
          </Card>
        ))
      )}
    </div>
  );
};

export default Sales;
