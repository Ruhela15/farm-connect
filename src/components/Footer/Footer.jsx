import React from 'react';
import './footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className='footer-content-left'>
                <img src={assets.logo} alt="FarmConnect Logo" />
                <p>
                   Connecting farmers directly with retailers, FarmConnect ensures fresh produce reaches your table with efficiency and transparency. Our platform is dedicated to fostering stronger relationships between growers and consumers, eliminating the middleman for a more seamless experience.
                </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="Facebook" />
                    <img src={assets.twitter_icon} alt="Twitter" />
                    <img src={assets.linkedin_icon} alt="LinkedIn" />
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>Get in Touch</h2>
                <ul>
                    <li>+91-9910721222</li>
                    <li>support@farmconnect.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>
            Copyright 2024 © FarmConnect.com - All Rights Reserved.
        </p>
    </div>
  );
};

export default Footer;
