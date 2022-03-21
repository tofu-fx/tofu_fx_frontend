import React, {useState} from 'react';
import '../css/NavigateBar.css';
import ReorderIcon from '@material-ui/icons/Reorder';

import user_logo from './images/user_logo.png';
import dragon_logo from './images/dragon_logo.png';
import shopping_cart from './images/shopping_cart.png';

function NavigateBar() {

  const [showLinks, setShowLinks] = useState(false);

  return(
    <div className="NavigateBar">
      <div className="left-side">
        <div className="images">
          <a href="/cart"><img src={dragon_logo} alt="tofu-logo"/></a>
        </div>
      </div>
      <div className="right-side">
        <div className="links" id={ showLinks ? "hidden" : "" }>
          <b><a href="/">HOME</a></b>
          <b><a href="/">FEATURED</a></b>
          <b><a href="/">SHOP</a></b>
          <b><a href="/">COMMISSIONS</a></b>
          <b><a href="/">CONTACT</a></b>
        </div>
        <button onClick={() => setShowLinks(!showLinks)}> <ReorderIcon /></button>
        <div className="images">
          <a href="/cart"><img src={shopping_cart} alt="cart"/></a>
          <a href="/"><img src={user_logo} alt="profile"/></a>
        </div>
      </div>
    </div>
  );
};

export default NavigateBar;
