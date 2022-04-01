import React from 'react';
import '../css/ShopCategoryCard.css';

class ShopCategoryCard extends React.Component {

  render() {
    return(
      <a href={this.props.href} className="shop-category-card">
        <div className="background" style={{backgroundImage: `url(${this.props.background})`}}></div>
        <div className="card-footer">
          <div className="card-title">
            {this.props.card_name}
          </div>
        </div>
      </a>
    )
  }

}

export default ShopCategoryCard;
