import React from 'react';
import '../css/ShopHome.css';

import ShopCategoryCard from './ShopCategoryCard.js';

import banners_category from '../images/shop_categories/banners.jpg';
import headers_category from '../images/shop_categories/headers.jpg';
import logos_category from '../images/shop_categories/logos.jpg';
import streaming_graphics_category from '../images/shop_categories/streaming_graphics.jpg';
import thumbnails_category from '../images/shop_categories/thumbnails.jpg';
import wallpapers_category from '../images/shop_categories/wallpapers.jpg';


function ShopHome() {
  return(
    <div className="shop">
      <div className="title"><div className="text">SHOP</div></div>
      <div className="categories">
        <div className="inner">
          <ShopCategoryCard card_name="BANNERS" background={banners_category} href="/shop/banners"/>
          <ShopCategoryCard card_name="HEADERS" background={headers_category} href="/shop/headers"/>
          <ShopCategoryCard card_name="LOGOS" background={logos_category} href="/shop/logos"/>
          <ShopCategoryCard card_name="STREAMING GRAPHICS" background={streaming_graphics_category} href="/shop/streaming_graphics"/>
          <ShopCategoryCard card_name="THUMBNAILS" background={thumbnails_category} href="/shop/thumbnails"/>
          <ShopCategoryCard card_name="WALLPAPERS" background={wallpapers_category} href="/shop/wallpapers"/>
        </div>
      </div>
    </div>
  );
};

export default ShopHome;
