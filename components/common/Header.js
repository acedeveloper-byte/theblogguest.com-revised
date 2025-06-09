'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link';

const Header = () => {
    
   

    return (
        <header>
            {/* Top Header */}
            <div className="top-header py-2 bg-white border-bottom">
                <div className="container d-flex justify-content-between align-items-center flex-wrap">
                    <div className="logo">
                        <Link href="/">
                            <img
                                src="images/logo/logo.png"
                                alt="Logo"
                                className="img-fluid"
                                style={{ maxHeight: '60px' }}
                            />
                        </Link>
                    </div>
                    <div className="ad-banner">
                        <img
                            src="images/logo/banner.png"
                            alt="Ad Banner"
                            className="img-fluid"
                            style={{ maxHeight: '60px' }}
                        />
                    </div>
                </div>
            </div>

            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark navbar-layout">
                <div className="container">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarMenu"
                        aria-controls="navbarMenu"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarMenu">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {[
                                'Technology',
                                'Health Lifestyle',
                                'Fashion',
                                'Entertainment',
                                'Design',
                                'Sports',
                                'Travels',
                                'Sales',
                            ].map((item, index) => (
                                <li className="nav-item" key={index}>
                                    <a
                                        className="nav-link text-white"
                                        href="/category"
                                        style={{ fontWeight: '400' }}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}

                            <li className="nav-item">
                                <a
                                    className="nav-link text-white"
                                    href="/login"
                                    style={{ fontWeight: '400' }}  >
                                    Login
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link text-white"
                                    href="/register"
                                    style={{ fontWeight: '400' }}
                                >
                                    Register
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link text-white"
                                    href="/submit-post"
                                    style={{ fontWeight: '400' }} >
                                    Submit Post
                                </a>
                            </li>
                        </ul>
                        <i className="bi bi-search text-white fs-5 ms-lg-3"></i>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
