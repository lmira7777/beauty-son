import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home/home';
import Products from './Pages/Products/products';
import ProductDetail from './Pages/ProductsDetail/productsDetail';
import MyCart from './Pages/myCart/myCart';
import ShippingAddress from './Pages/shippingAddress/shippingAddress';
import PaymentMethod from './Pages/paymentMethod/paymentMethod';
import ReviewOrder from './Pages/reviewOrder/reviewOrder';

const RouterConfig = () => (
  <Routes>
    <Route path="/" element={<Home  />} />
    <Route path="/shop" element={<Products />} />
    <Route path="/shop/:productId" element={<ProductDetail />} />
    <Route path="/mycart" element={<MyCart />} />
    <Route path="/review-order" element={<ReviewOrder />} />
    <Route path="/shipping-address" element={<ShippingAddress />} />
    <Route path="/payment-method" element={<PaymentMethod />} />
   
  </Routes>
);

export default RouterConfig;
