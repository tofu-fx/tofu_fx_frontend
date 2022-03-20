import React from 'react';
import user_logo from './user_logo.png';
import dragon_logo from './dragon_logo.png';
import shopping_cart from './shopping_cart.png';

function NavigateBar() {
  return(
    <div class="navigation-bar">
      <a class="navbar-img-left" href="/"><img src={dragon_logo} height="40" alt="tofu logo"/></a>
      <a class="navbar-img-right" href="/"><img src={user_logo} height="25" alt="profile"/></a>
      <a class="navbar-img-right" href="/cart"><img src={shopping_cart} height="25" alt="shopping cart"/></a>
      <b><a class="navbar-link" href="/">CONTACT</a></b>
      <b><a class="navbar-link" href="/">CUSTOM WORK</a></b>
      <b><a class="navbar-link" href="/">SHOP</a></b>
      <b><a class="navbar-link" href="/">FEATURED</a></b>
      <b><a class="navbar-link" href="/">HOME</a></b>
    </div>
  );
};

export default NavigateBar;
