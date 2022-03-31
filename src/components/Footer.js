import React from 'react';
import '../css/Footer.css';
import axios from 'axios';

import instagram_logo from '../images/instagram1.png';
import twitter_logo from '../images/twitter1.png';
import behance_logo from '../images/behance1.png';
import youtube_logo from '../images/youtube1.png';


class Footer extends React.Component {
  state = {
    instagram_link: "",
    twitter_link: "",
    behance_link: "",
    youtube_link: ""
  }

  componentDidMount() {
    axios.get(`https://tofufx-backend.herokuapp.com/socials?api_key=${process.env.REACT_APP_TOFU_BACKEND_API_KEY}`)
      .then(response => {
        const instagram_link = response.data.instagram;
        const twitter_link = response.data.twitter;
        const behance_link = response.data.behance;
        const youtube_link = response.data.youtube;
        this.setState({ instagram_link, twitter_link, behance_link, youtube_link });
    })
  }

  render() {
    return(
      <div className="footer">
        <div className="footer-title">
          CONTACT
        </div>
        <div className="socials">
          <a href={this.state.instagram_link} target="_blank" rel="noopener noreferrer"><img src={instagram_logo} alt="instagram"/></a>
          <a href={this.state.twitter_link} target="_blank" rel="noopener noreferrer"><img src={twitter_logo} alt="twitter"/></a>
          <a href={this.state.behance_link} target="_blank" rel="noopener noreferrer"><img src={behance_logo} alt="behance"/></a>
          <a href={this.state.youtube_link} target="_blank" rel="noopener noreferrer"><img src={youtube_logo} alt="youtube"/></a>
        </div>
        <div className="extra-text">
          © Copyright Tofu 2022, Website built by <a href="https://twitter.com/JacksonValdez03" target="_blank" rel="noopener noreferrer">Jackson Valdez</a>
        </div>
      </div>
    );
  }
};

export default Footer;
