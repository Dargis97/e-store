import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Basket from './components/Basket';
import Checkout from './components/Checkout';
import ProductDetails from './components/ProductDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='basket' element={<Basket />} />
      <Route path='checkout' element={<Checkout />} />
      <Route path='products/:productId' element={<ProductDetails />} />
    </Routes>
  </BrowserRouter>
);
