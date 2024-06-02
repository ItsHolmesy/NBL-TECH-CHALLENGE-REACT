import React, { useEffect, useState } from 'react';
import { useRoute } from 'wouter';
import fetchRetry from '../../fetchRetry';

const Details = () => {
  const [productDetail, setProductDetail] = useState(null);
  const [error, setError] = useState(null);
  const [, params] = useRoute("/detail/:id");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (params && params.id) {
          const data = await fetchRetry(`https://dummyjson.com/products/${params.id}`);
          setProductDetail(data);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [params]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!productDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{productDetail.title}</h1>
      <img src={productDetail.thumbnail} alt={productDetail.title} />
      <p>{productDetail.description}</p>
      <p>Price: ${productDetail.price}</p>
      <p>Brand: {productDetail.brand}</p>
    </div>
  );
}

export default Details;

