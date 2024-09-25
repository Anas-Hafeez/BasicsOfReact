import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  let [count,setcount]=useState(0);
  
  useEffect(function(){alert("value change")},[count])

  return (
    <>
    <center>
    <h1>{count} </h1>
    
    <button onClick={()=>setcount(count+1)}>increase</button>
    <button onClick={()=>setcount(count-1)}>decrease</button>
    </center>
    </>
  );
}

export default App;
