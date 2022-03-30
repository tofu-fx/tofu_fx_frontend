// Import React
import React from 'react';

// Import Styling
import '../css/AdminLogin.css';

function AdminLogin() {

  return (
    <div className="admin-login">
      <form action="/admin/home">
        <label>
          Admin Password
          <input type="text" name="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default AdminLogin;
