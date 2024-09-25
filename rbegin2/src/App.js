
import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import List from './components/List';
import '../src/index.css';
import React, { useState } from 'react';

function App() {

   let [fooditems,setfooditems]=useState(["Mango","Apple","Banana","Kiwi"]);
   function abc(event)
   {
    if(event.key==="Enter")
    {
      let newitems=event.target.value.trim();  //to trim blank spaces in the name entered.
      
      if(newitems && !fooditems.includes(newitems))
        {
         setfooditems(...fooditems,newitems);
        }
        event.target.value="";//if item matches then it will go blank

    }

   


   }
  return (
     <>
      <Header/>
      <Input  inpu={abc}/>
      <List  item={fooditems}/>
     </>
  );
}

export default App;
