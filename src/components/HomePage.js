import React from 'react';

import NavigateBar from './NavigateBar.js';
import About from './About.js';
import FeaturedWork from './FeaturedWork.js';
import ShopHome from './ShopHome.js';

import '../css/HomePage.css';

const HomePage = function() {
  return(
    <div className="home-page">
      <NavigateBar/>
      <About/>
      <FeaturedWork/>
      <ShopHome/>
    </div>
  );
};

export default HomePage;
