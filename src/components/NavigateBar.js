import React, {useState} from 'react';
import '../css/NavigateBar.css';

import dragon_logo from './images/dragon_logo.png';
import shopping_cart from './images/shopping_cart.png';
import dropdown_icon from './images/dropdown.png';

function NavigateBar() {

  const [showLinks, setShowLinks] = useState(false);

  return(
    <div className="NavigateBar">
      <div className="left-side">
        <div className="images">
          <a href="/"><img src={dragon_logo} alt="tofu-logo"/></a>
        </div>
      </div>
      <div className="right-side">
        <div className="links" id={ showLinks ? "hidden" : "" }>
          <b><a href="/" className="hover-underline-animation">HOME</a></b>
          <b><a href="/" className="hover-underline-animation">FEATURED</a></b>
          <b><a href="/" className="hover-underline-animation">SHOP</a></b>
          <b><a href="/" className="hover-underline-animation">COMMISSIONS</a></b>
          <b><a href="/" className="hover-underline-animation">CONTACT</a></b>
        </div>
        <button onClick={() => setShowLinks(!showLinks)}> <img src={dropdown_icon} height="19" alt="options"/></button>
        <div className="images">
          <a href="/cart"><img src={shopping_cart} alt="cart"/></a>
        </div>
      </div>
    </div>
  );
};

export default NavigateBar;
