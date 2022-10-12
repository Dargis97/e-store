import React from 'react';
import { Link } from 'react-router-dom';

function CategoryProduct({ id, title, image, specs, features, price, stock }) {
  return (
    <article>
      <div className='category-product-title'>
        <Link to={`products/${id}`}>{title}</Link>
      </div>

      <figure>
        <div className='category-product-image-container'>
          <img src={`./assets/${image}`} alt='{title}' />
        </div>
      </figure>

      <aside>
        <div className='category-product-info'>
          <h3>Dimensions</h3>
          <label>{specs.dimensions}</label>
        </div>

        {specs.capacity && (
          <div className='category-product-info'>
            <h3>Capacity</h3>
            <label>{specs.capacity}</label>
          </div>
        )}

        <div className='category-product-info'>
          <h3>Features</h3>
          <ul>
            {features?.map((f, i) => {
              return (
                <li key={`featurer${i}`} className='category-product-list-item'>
                  {f}
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      <aside>
        <div className='category-product-finance-price'>&euro;{price}</div>
        <div className='category-product-info-stock'>
          <label>Stock Level: {stock}</label>
          <label>FREE Delivery</label>
        </div>

        <div className='category-product-action'>
          <button>View Product</button>
          <button>Add to basket</button>
        </div>
      </aside>
    </article>
  );
}

export default CategoryProduct;
