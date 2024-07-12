import React, { useEffect } from 'react';
import { useNavigate, useLocation,Link } from "react-router-dom";
import axios from "axios";

function ViewProduct() {

    const location = useLocation()
    const product = location.state

  return (
    <div className="view-smoothie-main">
      <div className="visual">
        <img src='https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=background-blur-clean-531880.jpg&fm=jpg' />
      </div>
      <div className="contents">
      <div className="heading">Name: {product.productName}</div>
        <div className="sub-heading">Price: {product.price}</div>
        <div className="sub-heading">Rating: {product.rating}</div>
        <div className="sub-heading">Availability: {product.availability}</div>
      </div>
    </div>
  );
}

export default ViewProduct;
