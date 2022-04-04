import React from 'react';
import '../css/ProductCard.css';


function ProductCard(props) {
  return(
    <a href="/" className="product-card">
      <img src={props.product_data.display_img} alt="hero"/>
      <div className="product-footer">
        <div className="product-title">
          { props.product_data.title }
        </div>
        <div className="product-price">
          <b>${ props.product_data.price }.00</b>
        </div>
      </div>
    </a>
  )
}

export default ProductCard;