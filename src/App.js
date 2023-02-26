import logo from './logo.svg';
import './App.css';
import React,{useEffect} from 'react';
import Products from './Products';

function App() {
  
  return (
    <div className='border border-4 border-danger p-2 w-100 '>
      <h1>Welcome to Add Cart</h1>  
      <products></products>
      
    </div>
  );
}

export default App;
