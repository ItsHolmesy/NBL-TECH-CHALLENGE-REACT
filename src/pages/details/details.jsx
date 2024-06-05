import React from 'react';
import { useParams, Link } from 'wouter';
import useRetryingFetch from '../../hooks/useRetryingFetch';
import arrowLeftIcon from '../../assets/icons/arrow-left.svg';
import './details.scss';

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
    <div className='details-page'>
      <Link href="/">
        <span className='back-button'>
          <img src={arrowLeftIcon} alt="Back" className='back-icon'></img>
        </span>
      </Link>
      <h1 className='page-name'>Details</h1>
      <h1 className='product-title'>{productDetail?.title}</h1>
      <p className='product-brand'>{productDetail?.brand}</p>
      <img className='product-details' src={productDetail?.thumbnail} alt={productDetail?.title} />
      <p className='product-details'>{productDetail?.description}</p>
      <p className='product-price'>Price: ${productDetail?.price}</p>
    </div>
  );
}

export default Details;

