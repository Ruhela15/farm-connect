import React from 'react'
import './footer.css'
const footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className='footer-content-left'>
                <img src="{assets.logo}" alt="" />
                <p>
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere ea quibusdam, nulla laboriosam explicabo laudantium, accusantium ad similique amet porro facilis deleniti consequuntur dolorem, molestias ipsum distinctio quisquam impedit voluptate.
                </p>
                <div className="footer-social-icons">
                    <img src="{assets.facebook_icon}" alt="" />
                    <img src="{assets.twitter_icon}" alt="" />
                    <img src="{assets.linkedin_icon}" alt="" />
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-9910721222</li>
                    <li>farmconnect123@gmail.com</li>
                </ul>
            </div>

        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 © FarmConnect.com - All Right Reserved.
        </p>
    </div>
  )
}

export default footer