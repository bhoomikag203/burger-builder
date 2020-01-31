import React from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Burger from './components/Burger/Burger';

function App() {
  return (
    <div>
      <Layout >
        <p>My burger</p>
        <Burger />
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
