import React from 'react';
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <div>
      Cart{' '}
      <Link className="text-fuchsia-500" to="/">
        Home
      </Link>
    </div>
  );
}

export default Cart;
