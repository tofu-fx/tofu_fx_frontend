// Import React
import React from 'react';

// Import Styling
import '../css/FeaturedWork.css';

// Import Featured
import feat1 from '../images/featured/feat1.png';

function FeaturedWork() {
  return(
    <div className="featured-work">
      <div className="title">FEATURED WORK</div>
      <div className="main-carousel" data-flickity='{ "wrapAround": true, "imagesLoaded": true, "groupCells": 1, "autoPlay": 7000 }'>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/tulip.jpg" alt="tulip" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/tulip.jpg" alt="tulip" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/tulip.jpg" alt="tulip" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/tulip.jpg" alt="tulip" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/tulip.jpg" alt="tulip" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/tulip.jpg" alt="tulip" />
        <img src={feat1} alt="tulip" />
      </div>
    </div>
  )
}

export default FeaturedWork;
