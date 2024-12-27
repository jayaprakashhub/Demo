import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.new_logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nisi saepe ullam impedit! Accusamus ratione optio delectus voluptatum nesciunt quisquam!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                
                <h2>COMPANY</h2>
                <ul>
                    
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 9565362512</li>
                    <li>foodle@gmail.com</li>
                </ul>
            </div>
            
            
        </div>
        <p>Developed & Maintained by <b>Jayaprakash</b> </p>
        <hr />
        <p className='footer-copyright'>Copyright &copy; 2024  Tomato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
