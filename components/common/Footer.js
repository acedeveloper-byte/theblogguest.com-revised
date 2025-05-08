import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 footer-section">
                            <h6>About Our Platform</h6>
                            <p>Theguestblogging.com launched in 2021. We feature posts on various areas like Business, Travel, Lifestyle, and more.</p>
                        </div>
                        <div class="col-md-3 footer-section">
                            <h6>Recent Posts</h6>
                            <ul>
                                <li>
                                    <a href="#">Know How The World's Biggest Fandoms Shape Trends
                                        </a></li>
                                <li><a href="#">Rakul in yellow bikini – Julie 2 actress flaunted</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-bottom d-flex justify-content-between align-items-center">
                        <div>&copy; 2025 TheGuestBlogging.com</div>
                        <div class="social-icons">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
