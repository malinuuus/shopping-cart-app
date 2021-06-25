import React, { useContext, useState } from 'react';
import { MyContext } from '../context';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Avatar } from '@material-ui/core';
import CartElement from './CartElement';
import '../styles/cart.css';

const Cart = () => {
  const { cart, setCart } = useContext(MyContext);

  const [cartOpen, setCartOpen] = useState(false);
  const closeStyle = { transform: 'translateX(82%)' };
  const cartLength = cart.length;

  //usuwanie elementu
  const handleRemoving = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <div className='cart' style={cartOpen ? null : closeStyle}>
      <div className='cart-stripe'>
        <div className='cart-icon'>
          <ShoppingCartIcon
            className='cart-icon'
            style={{ fontSize: '50px' }}
            onClick={() => setCartOpen(!cartOpen)}
          />
          {cartLength !== 0 ? (
            <Avatar className='cart-length'>{cartLength}</Avatar>
          ) : null}
        </div>
      </div>
      <div className='cart-content'>
        {cart.map((product, i) => (
          <CartElement
            product={product}
            index={i}
            handleRemoving={handleRemoving}
          />
        ))}
        {cartLength !== 0 ? (
          <button className='cart-button'>Zapłać</button>
        ) : null}
      </div>
    </div>
  );
};

export default Cart;
