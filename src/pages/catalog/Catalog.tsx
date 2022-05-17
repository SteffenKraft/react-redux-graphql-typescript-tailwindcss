import React from 'react';
import { Link } from 'react-router-dom';

function Catalog() {
  return (
    <div>
      Catalog{' '}
      <Link className="text-fuchsia-500" to="/product">
        Product
      </Link>
    </div>
  );
}

export default Catalog;
