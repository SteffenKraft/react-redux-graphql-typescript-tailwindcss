import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/cart/Cart';
import Home from './pages/home/Home';
import Layout from './pages/layout/Layout';

const Catalog = lazy(() => import('./pages/catalog/Catalog'));
const Product = lazy(() => import('./pages/product/Product'));

function App() {
  return (
    <div className="m-5">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="catalog"
            element={
              <Suspense fallback={<>...</>}>
                <Catalog />
              </Suspense>
            }
          />

          <Route
            path="/product/:productId"
            element={
              <Suspense fallback={<>...</>}>
                <Product />
              </Suspense>
            }
          />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
