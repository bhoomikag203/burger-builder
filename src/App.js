import React from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div>
      <Layout >
        <p>My burger</p>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
