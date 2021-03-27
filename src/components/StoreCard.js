import React from 'react';

const StoreCard = ({ product, setDetailsOpen }) => {
  const { img, name, id, price } = product;

  return (
    <div className='store-card'>
      <img src={img} alt={`${name}-img`} />
      <p className='store-card-name'>{name}</p>
      <p className='store-card-price'>{price.toFixed(2)} pln</p>
      <button
        className='store-details-button'
        onClick={() => setDetailsOpen(id)}
      >
        Show details
      </button>
    </div>
  )
}

export default StoreCard;