import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="nav-main">
      <div className="logo">
        LOGO
      </div>
      <div className="menu">
        <Link to="/">Our Products</Link>
      </div>
    </div>
  );
}

export default Navbar;
