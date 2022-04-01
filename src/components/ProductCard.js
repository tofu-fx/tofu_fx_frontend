import React from 'react';
import '../css/ProductCard.css';


function ProductCard(props) {
  return(
    <div className="product-card">
      <li>{props.product_data.title} - {props.product_data.price} pennies</li>
    </div>
  )
}

export default ProductCard;
