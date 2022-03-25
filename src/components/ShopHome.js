import React from 'react';
import '../css/ShopHome.css';

import ShopCategoryCard from './ShopCategoryCard.js';

import example_card_background from '../images/shop_categories/testing.jpg';


function ShopHome() {
  return(
    <div className="shop">
      <div className="title"><div className="text">SHOP</div></div>
      <div className="categories">
        <div className="inner">
          <ShopCategoryCard card_name="YOUTUBE GRAPHICS" background={example_card_background} href="/shop/youtube"/>
          <ShopCategoryCard card_name="STREAMING GRAPHICS" background={example_card_background} href="/shop/streaming_graphics"/>
          <ShopCategoryCard card_name="CATEGORY NAME HERE" background={example_card_background} href="/shop/youtube"/>
          <ShopCategoryCard card_name="SOMETHING!@#$" background={example_card_background} href="/shop/youtube"/>
          <ShopCategoryCard card_name="AVATARS" background={example_card_background} href="/shop/youtube"/>
          <ShopCategoryCard card_name="CATEGORY TITLE THAT TAKES MULTIPLE LINES" background={example_card_background} href="/shop/youtube"/>
        </div>
      </div>
    </div>
  );
};

export default ShopHome;
