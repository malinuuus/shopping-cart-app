import React, { useContext } from 'react';
import { MyContext } from '../context';
import { Link } from 'react-router-dom';
import '../styles/nav.css'

const Nav = () => {
  const {menOrWomen, setMenOrWomen} = useContext(MyContext);
  const yellowFont = {color: '#dff542'}

  return (
    <div className='nav'>
      <div className='nav-toggle'>
        <button
          style={menOrWomen === 'men' ? null : yellowFont}
          onClick={() => setMenOrWomen('men')}
        >
          ON
        </button>
        <p>\</p>
        <button
          style={menOrWomen === 'men' ? yellowFont : null}
          onClick={() => setMenOrWomen('women')}
        >
          ONA
        </button>
      </div>
      <div className='nav-menu'>
        <ul>
          <li>
            <Link to='store' className='menu-link' >Sklep</Link>
          </li>
          <li>
            <Link to='info' className='menu-link' >Info</Link>
          </li>
          <li>
            <Link to='faq' className='menu-link' >FAQ</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav;