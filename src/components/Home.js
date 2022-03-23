import React from 'react';

import NavigateBar from './NavigateBar.js';
import About from './About.js';
import FeaturedWork from './FeaturedWork.js';
import ShopHome from './ShopHome.js';

const Home = function() {
  return(
    <div>
      <NavigateBar/>
      <About/>
      <FeaturedWork/>
      <ShopHome/>
    </div>
  );
};

export default Home;
