import React from 'react';

import { useParams } from 'react-router-dom';

import { getProductById } from '../fetcher';

const ProductDetails = () => {
  const [product, setProduct] = React.useState({
    errorMessage: '',
    data: {},
  });
  const { productId } = useParams();

  React.useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getProductById(productId);
      setProduct(responseObject);
    };
    fetchData();
  }, [productId]);

  const createMarkup = () => {
    return { __html: product.data?.description };
  };

  return (
    <article>
      <div className='category-product-title'>{product.data.title}</div>

      <figure>
        <div className='category-product-image-container'>
          <img src={`/assets/${product.data.image}`} alt={product.data.title} />
        </div>
      </figure>

      <aside>
        <div className='category-product-info'>
          <h3>Dimensions</h3>
          <label>{product.data.specs?.dimensions}</label>
        </div>

        {product.data.specs?.capacity && (
          <div className='category-product-info'>
            <h3>Capacity</h3>
            <label>{product.data.specs?.capacity}</label>
          </div>
        )}

        <div className='category-product-info'>
          <h3>Features</h3>
          <ul>
            {product.data.features?.map((f, i) => {
              return (
                <li className='category-product-list-item' key={`feature${i}`}>
                  {f}
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      <aside>
        <div className='category-product-finance-price'>
          &euro;{product.data.price}
        </div>

        <div className='category-product-info-stock'>
          <label>Stock Level: {product.data.stock}</label>
          <label>FREE Delivery</label>
        </div>

        <div className='category-product-action'>
          <button>Add to Basket</button>
        </div>
      </aside>

      <div
        className='category-product-description'
        dangerouslySetInnerHTML={createMarkup()}
      ></div>
    </article>
  );
};

export default ProductDetails;
