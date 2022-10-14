import React, { useContext, useState, useEffect } from 'react';

import { useNavigate, Link } from 'react-router-dom';

import { CartContext } from '../context/cartContext';

import { TrashIcon, UpIcon, DownIcon } from './icons';

import { formatNumber } from '../utils';

function Basket() {
  const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate();
  const {
    getItems,
    removeProduct,
    increaseQuantity,
    decreaseQuantity,
    clearBasket,
  } = useContext(CartContext);

  useEffect(() => {
    setCartItems(getItems());
  }, [getItems]);

  const renderCart = () => {
    if (cartItems.length > 0) {
      return cartItems.map((p) => (
        <React.Fragment key={p.id}>
          <div>
            <Link to={`/products/${p.id}`}>{p.title}</Link>
          </div>
          <h3 className='basket-quantity'>
            {p.quantity}

            <UpIcon
              width={20}
              onClick={() => setCartItems(increaseQuantity({ id: p.id }))}
            ></UpIcon>
            <DownIcon
              width={20}
              onClick={() => setCartItems(decreaseQuantity({ id: p.id }))}
            ></DownIcon>
            <TrashIcon
              width={20}
              onClick={() => setCartItems(removeProduct({ id: p.id }))}
            ></TrashIcon>
          </h3>

          <h3 className='basket-price'>{formatNumber(p.price)}</h3>
        </React.Fragment>
      ));
    } else {
      return <div>The basket is currently empty</div>;
    }
  };

  const renderTotal = () => {
    const cartItems = getItems();
    const total = cartItems.reduce(
      (total, item) => (total += item.price * item.quantity),
      0
    );
    return total;
  };

  return (
    <div className='basket-container'>
      <h2 className='basket-title'>Shopping Basket</h2>
      <button className='basket-button' onClick={() => navigate('/checkout')}>
        Checkout
      </button>

      <div className='basket-table'>
        <div className='basket-table-header'>
          <h4>Item</h4>
          <h4>Quantity</h4>
          <h4>Price</h4>
        </div>

        <hr />
        <div className='basket-table-header'>{renderCart()}</div>
        <hr />
      </div>

      <button
        className='basket-button'
        onClick={() => setCartItems(clearBasket())}
      >
        Clear
      </button>
      <h2>Total: {formatNumber(renderTotal())}</h2>
    </div>
  );
}

export default Basket;
