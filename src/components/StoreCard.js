import React, { useContext } from 'react';
import { MyContext } from '../context';

const StoreCard = ({ product: { img, name, id, price } }) => {
  const { setDetailsOpen } = useContext(MyContext);

  return (
    <div className='store-card'>
      <img src={img} alt={`${name}-img`} />
      <p className='store-card-name'>{name}</p>
      <p className='store-card-price'>{price.toFixed(2)} pln</p>
      <button
        className='store-details-button'
        onClick={() => setDetailsOpen(id)}
      >
        Pokaż szczegóły
      </button>
    </div>
  )
}

export default StoreCard;