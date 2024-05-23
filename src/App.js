// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CoinList from './components/CoinList';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchCoins = async () => {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 100,
          page: 1,
          sparkline: false,
        },
      });
      setCoins(response.data);
    };

    fetchCoins();
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Crypto Tracker</h1>
      <SearchBar search={search} onSearchChange={handleSearchChange} />
      <CoinList coins={filteredCoins} />
    </div>
  );
};

export default App;
