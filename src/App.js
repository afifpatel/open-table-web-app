import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import SearchForm from './containers/SearchForm/SearchForm';
import RestaurantsList from './components/RestaurantsList/RestaurantsList';
import Paginator from './components/Paginator/Paginator';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <SearchForm />
        <Paginator />
        <RestaurantsList />
      </Layout>
    </div>
  );
}

export default App;
