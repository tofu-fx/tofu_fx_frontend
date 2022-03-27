import React from 'react';
import '../css/Footer.css';

import instagram_logo from '../images/instagram1.png';
import twitter_logo from '../images/twitter1.png';
import behance_logo from '../images/behance1.png';
import youtube_logo from '../images/youtube1.png';


const Footer = function() {
  return(
    <div className="footer">
      <div className="footer-title">
        CONTACT
      </div>
      <div className="socials">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src={instagram_logo} alt="instagram"/></a>
        <a href="https://twitter.com/sheluvssinners" target="_blank" rel="noopener noreferrer"><img src={twitter_logo} alt="twitter"/></a>
        <a href="https://www.behance.net/cozmoxxix" target="_blank" rel="noopener noreferrer"><img src={behance_logo} alt="behance"/></a>
        <a href="https://www.youtube.com/channel/UClhh5r9qXFIMuB-G6AuRjAQ" target="_blank" rel="noopener noreferrer"><img src={youtube_logo} alt="youtube"/></a>
      </div>
      <div className="extra-text">
        © Tofu 2022, Website built by <a href="https://twitter.com/JacksonValdez03" target="_blank" rel="noopener noreferrer">Jackson Valdez</a>
      </div>
    </div>
  );
};

export default Footer;
