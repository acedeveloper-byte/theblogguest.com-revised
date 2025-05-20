import React from 'react';
import "../../globals.css";
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Page = () => {
    return (
        <>
            <Header />
            <div className="container my-4">
                <div className="row">
                    <div className="col-lg-1 my-2"></div>

                    <div className="col-lg-7 my-2">
                        <h5>Category: News</h5>
                        <p>Stay informed with the latest news and updates at !</p>
                        <img 
                            src="https://cdn.pixabay.com/photo/2017/06/05/11/01/airport-2373727_1280.jpg" 
                            className="container-fluid" 
                            alt="Airport view" 
                        />
                        <div className="card-body p-2">
                            <h6 className="card-title mb-1">Explore the Hidden Gems of Kerala</h6>

                            <div className="social-icons">
                                <a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="twitter"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="reddit"><i className="fab fa-reddit-alien"></i></a>
                                <a href="#" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
                                <a href="#" className="pinterest"><i className="fab fa-pinterest-p"></i></a>
                                <a href="#" className="mix"><i className="fab fa-mixcloud"></i></a>
                                <a href="#" className="medium"><i className="fab fa-medium-m"></i></a>
                                <a href="#" className="whatsapp"><i className="fab fa-whatsapp"></i></a>
                                <a href="#" className="more"><i className="fas fa-plus"></i></a>
                            </div>
                            <p className="card-text small text-muted">
                                Discover backwaters, beaches, temples, and more...
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-3 my-2">
                        <div>
                            <h5 className="border-start border-danger border-3 ps-2 mb-3 mx-2">Travel</h5>
                            <img 
                                src="https://cdn.pixabay.com/photo/2017/06/05/11/01/airport-2373727_1280.jpg" 
                                className="container-fluid" 
                                alt="Travel view" 
                            />
                            <div className="card-body p-2">
                                <h6 className="card-title mb-1">Explore the Hidden Gems of Kerala</h6>
                                <p className="card-text small text-muted">Discover backwaters, beaches, temples, and more...</p>
                            </div>
                        </div>

                        {[1, 2].map((_, index) => (
                            <div className="card mb-3 border" key={index}>
                                <div className="row g-0">
                                    <div className="col-md-2">
                                        <img 
                                            src="https://cdn.pixabay.com/photo/2016/03/27/23/08/woman-1284656_1280.jpg" 
                                            className="img-fluid rounded-start" 
                                            alt="Woman" 
                                        />
                                    </div>
                                    <div className="col-md-10">
                                        <div className="card-body">
                                            <div className="blog-tags">
                                                ENTERTAINMENT NEWS SHAYARI & QUOTES VALENTINE WEEK
                                            </div>
                                            <h5 className="blog-title">
                                                Happy Valentine’s Day 2025 Wishes for Fiance; Quotes, Images, Messages, Greetings, Sayings and Captions
                                            </h5>
                                            <p className="blog-meta mb-0">February 12, 2025 / Admin</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Page;
