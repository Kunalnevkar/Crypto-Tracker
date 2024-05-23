// src/components/Coin.js
import React from 'react';

const Coin = ({ coin }) => {
  return (
    <div className="coin">
      <img src={coin.image} alt={coin.name} />
      <h2>{coin.name}</h2>
      <p>{coin.symbol.toUpperCase()}</p>
      <p>${coin.current_price.toLocaleString()}</p>
    </div>
  );
};

export default Coin;
