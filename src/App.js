import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import CryptoCurrencies from './containers/CryptoCurrencies/CryptoCurrencies';

const App = () => {
  return (
    <div>
      <Layout>
        <CryptoCurrencies />
      </Layout>
    </div>
  );
}

export default App;
