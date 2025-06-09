// /[slug]/page.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../globals.css';
import Postdetails from '@/components/PostDetails';
import axios from 'axios';
import { HOST } from '@/utils/static';
import { notFound } from 'next/navigation';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';


export async function generateMetadata({ params }) {

  const res = await axios.get(`${HOST}post/fetch-all-post-by-url/${params.slug}`);
  const post = res.data.response;

  return {
    title: post.title,
    description: "Read more about " + post.title,
  };
}

const getData = async (slug) => {
  const res = await fetch(`${HOST}post/fetch-all-post-by-url/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch posts");

  return res.json();
};

// ✅ Must be a default export
export default async function Page({ params }) {
  const { slug } = params
  const post = await getData(slug)
  // const  post =[]



  if (!post || post.length === 0) {
    notFound(); // Redirect to 404 page using Next.js built-in 404 handling
  }
console.log(post.response)
  return (
    <>
      <Header/>
      <div className='penci-single-wrapper'>
        <Postdetails data={post.response} />
      </div>
      <Footer />
    </>
  );
}
