import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import useRetryingFetch from '../../hooks/useRetryingFetch';

const Home = () => {
  const [data, isLoading, error] = useRetryingFetch('https://dummyjson.com/products')

  // Render list of items.
  return (
    <>
      <h1>Home Page</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {data?.products.map(product => (
            <li key={product.id}>
              <Link to={`/detail/${product.id}`}>{product.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Home;

