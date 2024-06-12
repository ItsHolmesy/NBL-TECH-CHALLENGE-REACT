import React from 'react';
import { Link } from 'wouter';
import useRetryingFetch from '../../hooks/useRetryingFetch';
import useCategorisedProducts from '../../hooks/useCategorisedProducts.jsx';
import Header from '../../components/header.jsx';
import './home.scss'


const Home = () => {
  const [data, isLoading, error] = useRetryingFetch('https://dummyjson.com/products')
  const { categorisedProducts, activeCategory, handleCategoryClick } = useCategorisedProducts(data?.products || []);

  // Render list of items.
  return (
    <>
      <h1 className='page-name'>Home</h1>
      {/* Render category tabs */}
        <div className="category-tabs">
          {Object.keys(categorisedProducts).map(category => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={category === activeCategory ? 'active' : ''}
            >
              {category}
            </button>
          ))}
        </div>
      {/* Render products based on active category */}
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {categorisedProducts[activeCategory]?.map(product => (
            <li key={product.id}>
              <Link to={`/detail/${product.id}`}>
                <div className="product-container">
                  <img src={product.thumbnail} alt={product.title} />
                  <p>{product.title}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Home;

