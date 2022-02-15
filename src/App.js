import React from 'react';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import { useGlobalContext } from './context';

const App = () => {

  const {loading} = useGlobalContext();
  if (loading) {
    return (
      <div className="loading">
        <h1>loading...</h1>
      </div>
    );
  } else

  return (
    <div>
      <Navbar/>
      <CartContainer/>
    </div>
  );
}

export default App;
