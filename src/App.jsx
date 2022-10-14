import './App.scss';
import React, { useEffect, useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Basket from './components/Basket';
import Category from './components/Category';
import Checkout from './components/Checkout';
import ProductDetails from './components/ProductDetails';
import Layout from './components/Layout';
import { getCategories } from './fetcher';
import Home from './components/Home';
import OrderConfirmation from './components/OrderConfirmation';
import SearchResults from './components/SearchResults';

function App() {
  const [categories, setCategories] = useState({ errorMessage: '', data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategories();
      setCategories(responseObject);
    };
    fetchData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout categories={categories} />}>
            <Route index element={<Home />} />
            <Route path='basket' element={<Basket />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='orderconfirmation' element={<OrderConfirmation />} />
            <Route path='search' element={<SearchResults />} />
            <Route path='products/:productId' element={<ProductDetails />} />
            <Route path='categories/:categoryId' element={<Category />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
