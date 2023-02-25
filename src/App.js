import logo from './logo.svg';
import './App.css';
import React,{useEffect} from 'react';

function App() {
  const [search,setSearch]= usestate("");
  const submitHandler = e =>{
    e.preventDefault();
    console.log(search);
  }
  return (
    <div>
      <center>
      <h4>Food Recipe App</h4> <br/>
      <form onSubmit={submitHandler}>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/> <br/>
        <input type="submit" value="search" />



      </form>
      </center>
    </div>
  );
}

export default App;
