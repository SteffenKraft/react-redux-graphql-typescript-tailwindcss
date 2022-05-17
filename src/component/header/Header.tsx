import React from 'react';
import logo from './logo.svg';

export const Header = function () {
  return (
    <header className="p-2">
      <img src={logo} className="w-10" alt="logo" />
    </header>
  );
};
