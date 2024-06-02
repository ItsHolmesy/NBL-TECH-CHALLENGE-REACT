import React, { useEffect, useState } from 'react';
import { Link } from 'wouter';
import fetchRetry from '../../utils/fetchRetry';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchRetry('https://dummyjson.com/products');
        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {products.map(item => (
            <li key={product.id}>
              <Link to={`/detail/${product.id}`}>{product.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;

