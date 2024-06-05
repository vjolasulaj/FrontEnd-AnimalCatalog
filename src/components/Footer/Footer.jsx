import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer-inner">
                    <div className="links-row">
                        <div className="links">
                            <h3>Links</h3>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Catalog</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Gallery</a></li>
                            </ul>
                        </div>
                        <div className="links">
                            <h3>Contact Info</h3>
                            <ul>
                                <li><a href="#">+42 852745</a></li>
                                <li><a href="#">info@petexpo.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="bottom-links">
                2024 &copy; Pet Expo. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer