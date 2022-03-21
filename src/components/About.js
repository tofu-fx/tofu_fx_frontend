import React from 'react';
import instagram_logo from './images/instagram.png';
import twitter_logo from './images/twitter.png';
import behance_logo from './images/behance.png';
import youtube_logo from './images/youtube.png';

const about = "I am a 19 year old Graphics Designer from the united states that's been doing graphic designing for 2 years now. fdsjhi sdiufhiu huisdiufubf  u iu ui usii siisi i/ Lorem Ipsum the dog flew over the nest.";

function About() {
  return(
    <div class="intro-container">
      <b><div class="intro-container-header">TOFU</div></b>
      <div class="intro-container-socials">
        <a class="intro-container-social" href="/"><img src={instagram_logo} width="30" alt="instagram"/></a>
        <a class="intro-container-social" href="/"><img src={twitter_logo} width="30" alt="twitter"/></a>
        <a class="intro-container-social" href="/"><img src={behance_logo} width="30" alt="behance"/></a>
        <a class="intro-container-social" href="/"><img src={youtube_logo} width="30" alt="youtube"/></a>
      </div>
      <div class="intro-container-text">
        {about}
      </div>
    </div>
  );
}

export default About;
