import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <>
            <div className='footer-links' id = 'footer'>
                <h1 className = 'text-center'>Travel To Georgia</h1>
                <div className='footer'>
                    <div className = 'footer-link-wrapper'>
                        <div className='footer-link-items'>
                            <h2>About Us</h2>
                            <ul>
                                <li>How it works</li>
                                <li>Testimonials</li>
                                <li>Careers</li>
                                <li>Investors</li>
                                <li>Terms of Service</li>
                            </ul>
                        </div>
                        <div className='footer-link-items'>
                            <h2>Contact Us</h2>
                            <ul>
                                <li>Contact</li>
                                <li>Support</li>
                                <li>Destinations</li>
                                <li>Sponsorships</li>
                            </ul>
                        </div>
                        <div className='footer-link-items'>
                            <h2>Videos</h2>
                            <ul>
                                <li>Submit Video</li>
                                <li>Ambassadors</li>
                                <li>Agency</li>
                                <li>Influencer</li>
                            </ul>
                        </div>
                        <div className='footer-link-items'>
                            <h2>Social Media</h2>
                            <ul>
                                <li>Instagram</li>
                                <li>Facebook</li>
                                <li>Youtube</li>
                                <li>Twitter</li>
                            </ul>
                        </div>
                    </div>
                </div>    
                <div className = 'footer-logos-wrapper'>
                    <div className = 'footer-logo'>
                        <i class="fas fa-map-marked-alt"></i>
                        TTG
                    </div>
                    <small class='website-rights'>TTG © 2020</small>
                    <div className = 'social-icons' id = 'social-logos'>
                        <ul>
                            <li> <i class='fab fa-instagram' /> </li>
                            <li> <i class='fab fa-facebook-f' /> </li>
                            <li> <i class='fab fa-youtube' /> </li>
                            <li> <i class='fab fa-twitter' /> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>    
    );
}

export default Footer
