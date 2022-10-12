import { useEffect, useState } from 'react';
import './App.scss';
import Category from './components/Category';
import CategoryProduct from './components/CategoryProduct';

import { getCategories, getProducts } from './fetcher';

function App() {
  const [categories, setCategories] = useState({ errorMessage: '', data: [] });
  const [products, setProducts] = useState({ errorMessage: '', data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategories();
      setCategories(responseObject);
    };
    fetchData();
  }, []);

  const hadleCategoryClick = (id) => {
    const fetchData = async () => {
      const responseObject = await getProducts(id);
      setProducts(responseObject);
    };
    fetchData();
  };

  const renderCategories = () => {
    return categories.data.map((c) => (
      <Category
        key={c.id}
        id={c.id}
        title={c.title}
        onCategoryClick={() => hadleCategoryClick(c.id)}
      />
    ));
  };

  const renderProducts = () => {
    return products.data.map((p) => (
      <CategoryProduct key={p.id} {...p}>
        {p.title}
      </CategoryProduct>
    ));
  };

  return (
    <>
      <header>My Store</header>
      <section>
        <nav>
          {categories.errorMessage && (
            <div>Error : {categories.errorMessage}</div>
          )}
          {categories.data && renderCategories()}
        </nav>
        <main>
          {products.errorMessage && <div>Error : {products.errorMessage}</div>}

          {products.data && renderProducts()}
        </main>
      </section>
      <footer>Footer</footer>
    </>
  );
}

export default App;
