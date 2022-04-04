import React from 'react';
import '../css/ProductCard.css';


function ProductCard(props) {
  return(
    <a href={ `/shop/products/${props.product_data.id}` } className="product-card">
      <img src={props.product_data.display_img} alt="hero"/>
      <div className="product-footer">
        <div className="product-title">
          { props.product_data.title }
        </div>
        <div className="product-price">
          <b>${ props.product_data.price }</b>
        </div>
      </div>
    </a>
  )
}

export default ProductCard;
