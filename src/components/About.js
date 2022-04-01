import React from 'react';
import '../css/About.css';
import '../fonts/AkiraExpanded.otf';
import axios from 'axios';

import instagram_logo from '../images/instagram.png';
import twitter_logo from '../images/twitter.png';
import behance_logo from '../images/behance.png';
import youtube_logo from '../images/youtube.png';

class About extends React.Component {
  state = {
    about_me: "",
    instagram_link: "",
    twitter_link: "",
    behance_link: "",
    youtube_link: ""
  }

  componentDidMount() {
    const google_sheet_id = "1dezRYzkCZ8VrfsbO2EKVoF9D_hIHsKAF_BuI7b83phA";
    const selection_1 = "B2";
    const selection_2 = "B2";

    axios.get(`https://tofufx-backend.herokuapp.com/${selection_1}/${selection_2}/${google_sheet_id}?api_key=${process.env.REACT_APP_TOFU_BACKEND_API_KEY}`)
      .then(response => {
        const about_me = response.data.values[0][0];
        this.setState({ about_me });
     })

    // axios.get(`https://tofufx-backend.herokuapp.com/socials?api_key=${process.env.REACT_APP_TOFU_BACKEND_API_KEY}`)
    //   .then(response => {
    //     const instagram_link = response.data.instagram;
    //     const twitter_link = response.data.twitter;
    //     const behance_link = response.data.behance;
    //     const youtube_link = response.data.youtube;
    //     this.setState({ instagram_link, twitter_link, behance_link, youtube_link });
    // })
  }

  render() {
    return(
      <div className="intro-container">
        <b><div className="title">TOFU</div></b>
        <div className="socials">
          <a href={this.state.instagram_link} target="_blank" rel="noopener noreferrer"><img src={instagram_logo} alt="instagram"/></a>
          <a href={this.state.twitter_link} target="_blank" rel="noopener noreferrer"><img src={twitter_logo} alt="twitter"/></a>
          <a href={this.state.behance_link} target="_blank" rel="noopener noreferrer"><img src={behance_logo} alt="behance"/></a>
          <a href={this.state.youtube_link} target="_blank" rel="noopener noreferrer"><img src={youtube_logo} alt="youtube"/></a>
        </div>

        <div className="about-text">
          {this.state.about_me}
        </div>
      </div>
    );
  }
}

export default About;
