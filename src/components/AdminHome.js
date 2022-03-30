// Import React
import React from 'react';
import {useLocation} from "react-router-dom";

// Import Styling
import '../css/AdminHome.css';

function AdminHome(props) {
  const search = useLocation().search;
  const password = new URLSearchParams(search).get('password');

  if(password === process.env.REACT_APP_ADMIN_PASSWORD) {
    return (
      <div className="admin-home">
        <h3>Admin Home Page</h3>
        <p>Successfully Logged In!</p>
      </div>
    )
  } else {
    return (<b><div className="invalid-password">Invalid Password</div></b>)
  }


}

export default AdminHome;
