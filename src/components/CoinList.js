// src/components/CoinList.js
import React from 'react';
import Coin from './Coin';

const CoinList = ({ coins }) => {
  return (
    <div className="coin-list">
      {coins.map(coin => (
        <Coin key={coin.id} coin={coin} />
      ))}
    </div>
  );
};

export default CoinList;
