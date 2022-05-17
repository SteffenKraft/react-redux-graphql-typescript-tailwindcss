import React from 'react';
import { Link } from 'react-router-dom';

function Product() {
  return (
    <div>
      Product{' '}
      <Link className="text-fuchsia-500" to="/cart">
        Cart
      </Link>
    </div>
  );
}

export default Product;
