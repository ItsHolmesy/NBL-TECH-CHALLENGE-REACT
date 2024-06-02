import React, { useEffect, useState } from 'react';
import { Link } from 'wouter';
import fetchRetry from '../../utils/fetchRetry';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchRetry('https://dummyjson.com/products');
        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Update loading state
      }
    };

    fetchData();
  }, []);

    // Render based on state
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h1>Home Page</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {products.map(product => (
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

