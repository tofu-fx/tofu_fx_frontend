import React from 'react';
import '../css/NavigateBar.css';

import user_logo from './images/user_logo.png';
import dragon_logo from './images/dragon_logo.png';
import shopping_cart from './images/shopping_cart.png';

function NavigateBar() {
  return(
    <nav className="navigation-bar">
      <a className="navbar-img-left" href="/"><img src={dragon_logo} height="40" alt="tofu logo"/></a>
      <a className="navbar-img-right" href="/"><img src={user_logo} height="25" alt="profile"/></a>
      <a className="navbar-img-right" href="/cart"><img src={shopping_cart} height="25" alt="shopping cart"/></a>
      <b><a className="navbar-link" href="/">CONTACT</a></b>
      <b><a className="navbar-link" href="/">COMMISSIONS</a></b>
      <b><a className="navbar-link" href="/">SHOP</a></b>
      <b><a className="navbar-link" href="/">FEATURED</a></b>
      <b><a className="navbar-link" href="/">HOME</a></b>
    </nav>
  );
};

export default NavigateBar;
