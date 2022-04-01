import React from 'react';
import '../css/ShopHome.css';
import axios from 'axios';

import ShopCategoryCard from './ShopCategoryCard.js';

// import banners_category from '../images/shop_categories/banners.jpg';
// import headers_category from '../images/shop_categories/headers.jpg';
// import logos_category from '../images/shop_categories/logos.jpg';
// import streaming_graphics_category from '../images/shop_categories/streaming_graphics.jpg';
// import thumbnails_category from '../images/shop_categories/thumbnails.jpg';
// import wallpapers_category from '../images/shop_categories/wallpapers.jpg';


class ShopHome extends React.Component {
  state = {
    banners_img: "",
    headers_img: "",
    logos_img: "",
    streaming_graphics_img: "",
    thumbnails_img: "",
    wallpapers_img: ""
  }

  componentDidMount() {
    let google_sheet_id = "1dezRYzkCZ8VrfsbO2EKVoF9D_hIHsKAF_BuI7b83phA";
    let selection_1 = "E6";
    let selection_2 = "E11";

    axios.get(`https://tofufx-backend.herokuapp.com/google_sheets/${selection_1}/${selection_2}/${google_sheet_id}?api_key=${process.env.REACT_APP_TOFU_BACKEND_API_KEY}`)
      .then(response => {
        const banners_img = response.data.values[0][0];
        const headers_img = response.data.values[1][0];
        const logos_img = response.data.values[2][0];
        const streaming_graphics_img = response.data.values[3][0];
        const thumbnails_img = response.data.values[4][0];
        const wallpapers_img = response.data.values[5][0];
        this.setState({ banners_img, headers_img, logos_img, streaming_graphics_img, thumbnails_img, wallpapers_img });
    })
  }

  render() {
    return(
      <div className="shop">
        <div className="title"><div className="text">SHOP</div></div>
        <div className="categories">
          <div className="inner">
            <ShopCategoryCard card_name="BANNERS" background={this.state.banners_img} href="/shop/banners"/>
            <ShopCategoryCard card_name="HEADERS" background={this.state.headers_img} href="/shop/headers"/>
            <ShopCategoryCard card_name="LOGOS" background={this.state.logos_img} href="/shop/logos"/>
            <ShopCategoryCard card_name="STREAMING GRAPHICS" background={this.state.streaming_graphics_img} href="/shop/streaming_graphics"/>
            <ShopCategoryCard card_name="THUMBNAILS" background={this.state.thumbnails_img} href="/shop/thumbnails"/>
            <ShopCategoryCard card_name="WALLPAPERS" background={this.state.wallpapers_img} href="/shop/wallpapers"/>
          </div>
        </div>
      </div>
    );
  }
};

export default ShopHome;
