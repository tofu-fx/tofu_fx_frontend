import React from 'react';
import NavigateBar from './NavigateBar.js';
import Footer from './Footer.js';
import ShopProductCard from './ShopProductCard.js';

import '../css/ShopCategory.css';


class ShopCategory extends React.Component {
  state = {
    shop_title: "BANNERS",
    results: "12"
  }

  render() {
    return(
      <div className="shop-category">
        <NavigateBar/>
        <div className="title">
          {this.state.shop_title}
        </div>
        <div className="info">
          <div className="results">
            {this.state.results} results
          </div>
        </div>
        <div className="products">

        </div>
      </div>
    )
  }
}

export default ShopCategory;
