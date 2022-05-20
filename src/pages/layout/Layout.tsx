import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Header } from '../../component/header/Header';

function Layout() {
  return (
    <div>
      <Header />

      <Link className="text-fuchsia-500" to="/catalog">
        Catalog
      </Link>
      <Link className="text-fuchsia-500" to="/cart">
        Cart
      </Link>
      <Link className="text-fuchsia-500" to="/">
        Home
      </Link>
      <Outlet />
    </div>
  );
}

export default Layout;
