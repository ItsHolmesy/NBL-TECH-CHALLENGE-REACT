import { useParams } from 'wouter';
import useRetryingFetch from '../../hooks/useRetryingFetch';

const Details = () => {
  const params = useParams()
  const [productDetail, isLoading, error] = useRetryingFetch(`https://dummyjson.com/products/${params.id}`)

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{productDetail?.title}</h1>
      <img src={productDetail?.thumbnail} alt={productDetail?.title} />
      <p>{productDetail?.description}</p>
      <p>Price: ${productDetail?.price}</p>
      <p>Brand: {productDetail?.brand}</p>
    </div>
  );
}

export default Details;

