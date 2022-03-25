import React from 'react';
import '../css/ShopHome.css';

import ShopCategoryCard from './ShopCategoryCard.js';
// import shop_home_background from '../images/shop_home_background.jpg';


function ShopHome() {
  return(
    <div className="shop">
      <div className="title"><div className="text">SHOP</div></div>
      <div className="categories">
        <div className="inner">
          <ShopCategoryCard/>
          <ShopCategoryCard/>
          <ShopCategoryCard/>
          <ShopCategoryCard/>
          <ShopCategoryCard/>
          <ShopCategoryCard/>
          <ShopCategoryCard/>
          <ShopCategoryCard/>
          <ShopCategoryCard/>
        </div>
      </div>
    </div>
  );
};

export default ShopHome;
