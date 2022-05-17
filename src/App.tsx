import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './component/header/Header';
import Cart from './pages/cart/Cart';
import Catalog from './pages/catalog/Catalog';
import Home from './pages/home/Home';
import Product from './pages/product/Product';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="product" element={<Product />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
