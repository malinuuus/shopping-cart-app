import React from 'react';
import '../styles/info.css';

const Info = ({ page }) => {
  return (
    <div className='info-page'>
      {page === 'info' ? (
        <h1>Podstronna 1</h1>
      ) : (
        <h1>Podstronna 2</h1>
      )}
    </div>
  )
}

export default Info;