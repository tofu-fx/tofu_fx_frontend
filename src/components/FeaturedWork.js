// Import React
import React from 'react';
import axios from 'axios';

// Import Styling
import '../css/FeaturedWork.css';
import '../css/external/button_animations.css';

// Import Featured
import feat1 from '../images/featured/feat1.jpg';
import feat2 from '../images/featured/feat2.jpg';
import feat3 from '../images/featured/feat3.jpg';
import feat4 from '../images/featured/feat4.jpg';
import feat5 from '../images/featured/feat5.jpg';
import feat6 from '../images/featured/feat6.jpg';
import feat7 from '../images/featured/feat7.jpg';
import feat8 from '../images/featured/feat8.jpg';
import feat9 from '../images/featured/feat9.jpg';
import feat10 from '../images/featured/feat10.jpg';

class FeaturedWork extends React.Component {
  state = {
    behance_link: ""
  }

  componentDidMount() {
    let google_sheet_id = "1dezRYzkCZ8VrfsbO2EKVoF9D_hIHsKAF_BuI7b83phA";
    let selection_1 = "B7";
    let selection_2 = "B7";

    axios.get(`https://tofufx-backend.herokuapp.com/google_sheets/${selection_1}/${selection_2}/${google_sheet_id}?api_key=${process.env.REACT_APP_TOFU_BACKEND_API_KEY}`)
      .then(response => {
        const behance_link = response.data.values[0][0];
        this.setState({ behance_link });
    })
  }

  render() {
    return(
      <div className="featured-work">
        <div className="title"><div className="text">FEATURED WORK</div></div>
        <div className="main-carousel" data-flickity='{ "wrapAround": true, "imagesLoaded": true, "groupCells": 1, "autoPlay": 7000 }'>
          <img src={feat1} alt="featured_work" />
          <img src={feat2} alt="featured_work" />
          <img src={feat3} alt="featured_work" />
          <img src={feat4} alt="featured_work" />
          <img src={feat5} alt="featured_work" />
          <img src={feat6} alt="featured_work" />
          <img src={feat7} alt="featured_work" />
          <img src={feat8} alt="featured_work" />
          <img src={feat9} alt="featured_work" />
          <img src={feat10} alt="featured_work" />
        </div>
        <div className="button-container">
          <form action={this.state.behance_link} target="_blank" rel="noopener noreferrer">
            <button className="button button--pan"><span>VIEW FULL PORTFOLIO</span></button>
          </form>
        </div>
      </div>
    )
  }
}

export default FeaturedWork;
