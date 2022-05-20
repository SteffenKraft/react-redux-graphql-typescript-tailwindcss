import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';

export const Header = function () {
  return (
    <header className="p-2">
      <Link to="/">
        <img src={logo} className="w-10" alt="logo" />
      </Link>
    </header>
  );
};
