import React from 'react';
import '../css/About.css';

import instagram_logo from './images/instagram.png';
import twitter_logo from './images/twitter.png';
import behance_logo from './images/behance.png';
import youtube_logo from './images/youtube.png';

const about = "I am an 19 year old Graphics Designer from the United States that's been doing graphic designing for over two years now. I specialize in social media gaming branding and stream graphics. If you’re interested in my work and would like to commission me, send a message to one of my socials above.";

function About() {
  return(
    <div className="intro-container">
      <b><div className="intro-container-header">TOFU</div></b>
      <a href="/"><img src={instagram_logo} width="30" alt="instagram"/></a>
      <a href="https://twitter.com/sheluvssinners" target="_blank" rel="noopener noreferrer"><img src={twitter_logo} width="30" alt="twitter"/></a>
      <a href="https://www.behance.net/cozmoxxix" target="_blank" rel="noopener noreferrer"><img src={behance_logo} width="30" alt="behance"/></a>
      <a href="https://www.youtube.com/channel/UClhh5r9qXFIMuB-G6AuRjAQ" target="_blank" rel="noopener noreferrer"><img src={youtube_logo} width="30" alt="youtube"/></a>
      <div className="intro-container-text">
        {about}
      </div>
    </div>
  );
}

export default About;
