import React from 'react';

import { Link, Outlet } from 'react-router-dom';

import { HomeIcon, CartIcon } from './icons';

import Search from './Search';

function Layout({ categories }) {
  const renderCategories = () => {
    return categories.data.map((c) => (
      <li key={c.id}>
        <Link to={`/categories/${c.id}`}>{c.title} </Link>
      </li>
    ));
  };

  return (
    <>
      <header>
        <div id='headerHomeIcon'>
          <Link to={'/'}>
            <HomeIcon width={40} />
          </Link>
          <Search />
        </div>
        <div id='headerTitle'>My Store</div>
        <div id='headerCartIcon'>
          <Link to={'/basket'}>
            <CartIcon width={40} />
          </Link>
        </div>
      </header>
      <section>
        <nav>
          {categories.errorMessage && (
            <div>Error : {categories.errorMessage}</div>
          )}
          <ul>{categories.data && renderCategories()}</ul>
        </nav>
        <main>
          <Outlet />
        </main>
      </section>
      <footer>
        <Link to={'/'}>Home</Link> | <Link to={'/Basket'}>Basket</Link>
      </footer>
    </>
  );
}

export default Layout;
