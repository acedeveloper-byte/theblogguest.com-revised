import React from 'react'
import "../../globals.css"
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

const page = () => {
    return (
        <>
            <Header />
            <div class="container my-4">
                <div class="row">
                    <div class="col-lg-1 my-2">
                    </div>
                    <div class="col-lg-7 my-2">
                        <h5 class="">Category: News</h5>
                        <p>Stay informed with the latest news and updates at !</p>
                        <img src="https://cdn.pixabay.com/photo/2017/06/05/11/01/airport-2373727_1280.jpg" class="container-fluid" alt="..." />
                        <div class="card-body p-2">
                            <h6 class="card-title mb-1">Explore the Hidden Gems of Kerala</h6>

                            <div class="social-icons">
                                <a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                <a href="#" class="twitter"><i class="fab fa-twitter"></i></a>
                                <a href="#" class="reddit"><i class="fab fa-reddit-alien"></i></a>
                                <a href="#" class="linkedin"><i class="fab fa-linkedin-in"></i></a>
                                <a href="#" class="pinterest"><i class="fab fa-pinterest-p"></i></a>
                                <a href="#" class="mix"><i class="fab fa-mixcloud"></i></a>
                                <a href="#" class="medium"><i class="fab fa-medium-m"></i></a>
                                <a href="#" class="whatsapp"><i class="fab fa-whatsapp"></i></a>
                                <a href="#" class="more"><i class="fas fa-plus"></i></a>
                            </div>
                            <p class="card-text small text-muted">Discover backwaters, beaches, temples, and more...</p>
                        </div>
                    </div>




                    <div class="col-lg-3 my-2">
                        <div>
                            <h5 class="border-start border-danger border-3 ps-2 mb-3 mx-2">Travel</h5>
                            <img src="https://cdn.pixabay.com/photo/2017/06/05/11/01/airport-2373727_1280.jpg" class="container-fluid" alt="..." />
                            <div class="card-body p-2">
                                <h6 class="card-title mb-1">Explore the Hidden Gems of Kerala</h6>
                                <p class="card-text small text-muted">Discover backwaters, beaches, temples, and more...</p>
                            </div>
                        </div>


                        <div class="card mb-3 border">
                            <div class="row g-0">
                                <div class="col-md-2">
                                    <img src="https://cdn.pixabay.com/photo/2016/03/27/23/08/woman-1284656_1280.jpg" class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-10">
                                    <div class="card-body">
                                        <div class="blog-tags">ENTERTAINMENT NEWS SHAYARI & QUOTES VALENTINE WEEK</div>
                                        <h5 class="blog-title">Happy Valentine’s Day 2025 Wishes for Fiance; Quotes, Images, Messages, Greetings, Sayings and Captions</h5>
                                        <p class="blog-meta mb-0">February 12, 2025 / Admin</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-3 border">
                            <div class="row g-0">
                                <div class="col-md-2">
                                    <img src="https://cdn.pixabay.com/photo/2016/03/27/23/08/woman-1284656_1280.jpg" class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-10">
                                    <div class="card-body">
                                        <div class="blog-tags">ENTERTAINMENT NEWS SHAYARI & QUOTES VALENTINE WEEK</div>
                                        <h5 class="blog-title">Happy Valentine’s Day 2025 Wishes for Fiance; Quotes, Images, Messages, Greetings, Sayings and Captions</h5>
                                        <p class="blog-meta mb-0">February 12, 2025 / Admin</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-3 border">
                            <div class="row g-0">
                                <div class="col-md-2">
                                    <img src="https://cdn.pixabay.com/photo/2016/03/27/23/08/woman-1284656_1280.jpg" class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-10">
                                    <div class="card-body">
                                        <div class="blog-tags">ENTERTAINMENT NEWS SHAYARI & QUOTES VALENTINE WEEK</div>
                                        <h5 class="blog-title">Happy Valentine’s Day 2025 Wishes for Fiance; Quotes, Images, Messages, Greetings, Sayings and Captions</h5>
                                        <p class="blog-meta mb-0">February 12, 2025 / Admin</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default page
