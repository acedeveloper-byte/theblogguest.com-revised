import React from 'react'

const Header = () => {
    return (
        <header>
            <div class="top-header">
                <div class="container-fluid d-flex justify-content-between align-items-center flex-wrap">
                    <div class="logo"><h6>LOGO Herer</h6></div>
                    <div class="ad-banner">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ18AAZ2bPjf3eiYgtZDt4IEK8cIW94FpWFGA&s" alt="Ad Banner" />
                    </div>
                </div>
            </div>
            <nav className="navbar-expand-lg navbar-custom">
                <div class="container-fluid">

                    <div class="row row-list">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item"><a class="nav-link" href="#">Tech</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Courses</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Business</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Entertainment</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Health</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Lifestyle</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Social Media</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Link Building</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Hot Photos</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Write for Us</a></li>
                        </ul>
                        <i class="bi bi-search search-icon"></i>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
