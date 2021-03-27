import React, { useState } from 'react';
import StoreCard from './StoreCard';
import data from '../data.json';
import '../styles/store.css';

const Store = ({ menOrWomen, setDetailsOpen }) => {
  const [query, setQuery] = useState('');
  //const [filtered, setFiltered] = useState(data.clothes);

  const handleChange = e => {
    setQuery(e.target.value);
  }

  return (
    <div className='store'>
      <div className='store-input-div'>
        <input
          autoComplete='off'
          id='query'
          value={query}
          onChange={handleChange}
        />
        <label htmlFor='name'>Search for...</label>
      </div>
      <div className='store-products'>
          {data.clothes
            .filter(elem => elem.maleOrFemale === menOrWomen)
            .filter(elem => elem.name.toLowerCase().includes(query.toLowerCase()))
            .map((elem, i) => (
              <StoreCard
                key={`${elem.name}${i}`}
                product={elem}
                setDetailsOpen={setDetailsOpen}
              />
          ))}
      </div>
    </div>
  )
}

export default Store;