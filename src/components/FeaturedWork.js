// Import React
import React from 'react';
import axios from 'axios';

// Import Styling
import '../css/FeaturedWork.css';
import '../css/external/button_animations.css';

class FeaturedWork extends React.Component {
  state = {
    image_urls: []
  }

  componentDidMount() {
    axios.get(`https://tofufx-backend.herokuapp.com/featured_work?api_key=${process.env.REACT_APP_TOFU_BACKEND_API_KEY}`)
      .then(res => {
        const image_urls = res.data.data.featured_images;
        this.setState({ image_urls });
     })
  }

  render() {
    return(
      <div className="featured-work">
        <div className="title"><div className="text">FEATURED WORK</div></div>
        <div className="main-carousel" data-flickity='{ "wrapAround": true, "imagesLoaded": true, "groupCells": 1, "autoPlay": 7000 }'>
          <img src={this.state.image_urls[0]} alt="featured-1"/>
          <img src={this.state.image_urls[1]} alt="featured-2"/>
          <img src={this.state.image_urls[2]} alt="featured-3"/>
          <img src={this.state.image_urls[3]} alt="featured-4"/>
          <img src={this.state.image_urls[4]} alt="featured-5"/>
          <img src={this.state.image_urls[5]} alt="featured-6"/>
          <img src={this.state.image_urls[6]} alt="featured-7"/>
          <img src={this.state.image_urls[7]} alt="featured-8"/>
          <img src={this.state.image_urls[8]} alt="featured-9"/>
          <img src={this.state.image_urls[9]} alt="featured-10"/>
        </div>
        <div className="button-container">
          <form action="https://www.behance.net/cozmoxxix" target="_blank" rel="noopener noreferrer">
            <button className="button button--pan"><span>VIEW FULL PORTFOLIO</span></button>
          </form>
        </div>
      </div>
    )
  }
}

export default FeaturedWork;
