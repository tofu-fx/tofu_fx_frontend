// Import React
import React from 'react';

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

function FeaturedWork() {
  return(
    <div className="featured-work">
      <div className="title">FEATURED WORK</div>
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
        <button className="button button--pan"><span>VIEW FULL PORTFOLIO</span></button>
      </div>
    </div>
  )
}

export default FeaturedWork;
