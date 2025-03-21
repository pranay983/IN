import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>ghjkgohiniiiiiijnlnlbnbjlnjlbnnkblnknbklnbkldfnblnlgnknbklndflnbjnbkjfnbirpog',mvpbkerbj[glkibvkbhvjbjbkfbjjb jbjbckjbjknkjbvkjbjcbjckjbbjkbfdgfdghifdbdbjbvihpjhjropjoprejoprjhklnfklbnflnbifdjgofdmblkdfnbijfonfdlbnflkbnklfdnbdnlkbdfibn</p>
            <div className="footer-social-icons">
                <img src= {assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 12345678</li>
                <li>fooddel23@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright"> Copyright 2024 Tomato.com - All right Reserved.</p>
    </div>
  )
}

export default Footer
