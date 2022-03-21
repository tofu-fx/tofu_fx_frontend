import React from 'react';

import NavigateBar from './NavigateBar.js';
import About from './About.js';
import FeaturedWork from './FeaturedWork.js';

const Home = function() {
  return(
    <div>
      <NavigateBar/>
      <About/>
      <FeaturedWork/>
    </div>
  );
};

export default Home;
