import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className='smoothie-card-main'>
      <div className="visual">
        <img src='https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=background-blur-clean-531880.jpg&fm=jpg' />
      </div>
      <div className="contents">
        <div className="heading">Name: {product.productName}</div>
        <div className="sub-heading">Price: {product.price}</div>
        <div className="sub-heading">Rating: {product.rating}</div>
        <div className="sub-heading">Discount: {product.discount}</div>
        <div className="sub-heading">Availability: {product.availability}</div>
        <Link className="view-button" to={'/viewProduct'} state={{...product}}>View</Link>
      </div>
    </div>
  );
}

export default ProductCard;
