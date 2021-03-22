import React, { useState } from 'react';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

const CartElement = ({ product, index, handleRemoving }) => {
  const size = product.selected;
  const {img, name, price} = product;
  const [removeButton, setRemoveButton] = useState(false);
  const RemoveIcon = RemoveCircleOutlineIcon;

  return (
    <div
      className='cart-element'
      onMouseEnter={() => setRemoveButton(true)}
      onMouseLeave={() => setRemoveButton(false)}
    >
      <img src={img}/>
      <div className='cart-element-details'>
        <p>{name}</p>
        <p>{price} pln</p>
        <p>{size}</p>
      </div>
      {removeButton ? (
        <button
          className='cart-element-remove'
          onClick={() => handleRemoving(index)}
        >
          <RemoveIcon className='cart-element-icon' />
        </button>
      ) : null}
    </div>
  )
}

export default CartElement
