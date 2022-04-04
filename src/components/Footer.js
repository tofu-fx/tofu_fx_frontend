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
    let google_sheet_id = "1dezRYzkCZ8VrfsbO2EKVoF9D_hIHsKAF_BuI7b83phA";
    let selection_1 = "B5";
    let selection_2 = "B8";

    axios.get(`https://tofufx-backend.herokuapp.com/google_sheets/${selection_1}/${selection_2}/${google_sheet_id}?api_key=${process.env.REACT_APP_TOFU_BACKEND_API_KEY}`)
      .then(response => {
        const instagram_link = response.data.values[0][0];
        const twitter_link = response.data.values[1][0];
        const behance_link = response.data.values[2][0];
        const youtube_link = response.data.values[3][0];
        this.setState({ instagram_link, twitter_link, behance_link, youtube_link });
    })
  }

  render() {
    return(
      <div className="footer" id="footer">
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
          © Tofu 2022, Website built by <a href="https://twitter.com/JacksonValdez03" target="_blank" rel="noopener noreferrer">Jackson Valdez</a>
        </div>
      </div>
    );
  }
};

export default Footer;
