import React from 'react';
import { Link } from 'wouter';
import useRetryingFetch from '../../hooks/useRetryingFetch';
import './home.css'

const Home = () => {
  const [data, isLoading, error] = useRetryingFetch('https://dummyjson.com/products')

  // Render list of items.
  return (
    <>
      <h1 className='page-name'>Home: Products</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {data?.products.map(product => (
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

