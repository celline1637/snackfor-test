import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home';
import OrderListPage from './pages/orderList';
import OrderItem from './pages/orderItem';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cart/*" element={<OrderListPage />} />
            <Route path="cart/:id" element={<OrderItem />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default Router;
