import logo from './logo.svg';
import './App.css';
import React from 'react';
import Products from './Products';
import Cart from './Cart';

function App() {
  
  return (
    <div className='border border-4 border-danger p-2 w-100 '>
     <center><h1>Welcome to Add Cart</h1>  </center> 
      <Products></Products>
      
    </div>
  );
}

export default App;
