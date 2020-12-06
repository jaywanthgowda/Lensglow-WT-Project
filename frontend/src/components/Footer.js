import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/contact-us'>Contact</Link>
            <Link to='/'>Support</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Lensglow
              <i className='fas fa-glasses' />
            </Link>
          </div>
          <small class='website-rights'>Lensglow © 2020</small>
          <div class='social-icons'>
            <a href='https://www.facebook.com' target='_blank' rel='noreferrer'>
              <i class='fab fa-facebook-f' />
            </a>

            <a href='https://www.instagram.com' target='_blank' rel='noreferrer'>
              <i class='fab fa-instagram' />
            </a>

            <a href='https://www.youtube.com' target='_blank' rel='noreferrer'>
              <i class='fab fa-youtube' />
            </a>
            <a href='https://www.twitter.com' target='_blank' rel='noreferrer'>
              <i class='fab fa-twitter' />
            </a>
            <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer'>
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;