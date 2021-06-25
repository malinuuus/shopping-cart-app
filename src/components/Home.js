import React from 'react';
import { Link } from 'react-router-dom';

import manPic from '../img/men.jpg';
import womanPic from '../img/women.jpg';
import '../styles/home.css'

const Home = ({ setMenOrWomen }) => {
  return (
    <div className='home-page'>
      <Link
        to='projekt/store'
        onClick={() => setMenOrWomen('men')}
      >
        <div className='link-content'>
          <img src={manPic} alt='men'/>
          <p>ON</p>
        </div>
      </Link>
      <div className='mid-stripe'></div>
      <Link
        to='projekt/store'
        onClick={() => setMenOrWomen('women')}
      >
        <div className='link-content'>
          <img src={womanPic} alt='women' />
          <p>ONA</p>
        </div>
      </Link>
    </div>
  )
}

export default Home;