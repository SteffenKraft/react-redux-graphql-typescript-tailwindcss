import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      Home{' '}
      <Link className="text-fuchsia-500" to="/catalog">
        Catalog
      </Link>
    </div>
  );
}

export default Home;
