import React, { useEffect, useRef, useState } from 'react';
import data from '../data.json';
import { Avatar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import '../styles/details.css';

const Details = ({ detailsOpen, setDetailsOpen, setCart }) => {
  const product = data.clothes.filter(elem => elem.id === detailsOpen)[0];
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const [selected, setSelected] = useState(null);
  const [warning, setWarning] = useState(false);
  
  const handleClose = () => {
    setDetailsOpen(-1);
    setSelected(null);
    setWarning(false);
  };

  const useOutsideAlerter = ref => {
    useEffect(() => {
      const handleClickOutside = e => {
        if (ref.current && !ref.current.contains(e.target)) {
          handleClose();
        }
      }

      document.addEventListener('mousedown', handleClickOutside);
      
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      }
    }, [ref])
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const handleSelecting = size => {
    setSelected(size);
    if(warning) setWarning(false);
  }

  const handleAdding = () => {
    if (selected !== null) {
      setCart(state => [...state, {...product, selected}]);
      setSelected(null);
    } else {
      setWarning(true);
    }
  }

  return detailsOpen !== -1 ?
  (
    <section className='details-background'>
      <div className='details-content' ref={wrapperRef}>
        <img className='details-photo' src={product.img} />
        <div className='details-info'>
          <h2>{product.name}</h2>
          <p>{product.price.toFixed(2)} pln</p>
          <div className='details-sizes'>
            {sizes.map(size => (
              <Avatar
                className='size-icon'
                onClick={() => handleSelecting(size)}
                style={selected === size ? {background: 'gray'} : null}
              >
                {size}
              </Avatar>
              ))}
          </div>
          <p
            className='details-warning'
            style={warning ? {opacity: 1} : {opacity: 0, pointerEvents: 'none'}}
          >
            Choose a size
          </p>
          <button onClick={handleAdding}>Add to the cart</button>
        </div>
        <CloseIcon
          className='close-icon'
          style={{fontSize: '40px'}}
          onClick={handleClose}
        />
      </div>
    </section>
  ) : null
}

export default Details;