import logo from './logo.svg';
import './App.css';
import ChildA from './ChildA';
import { createContext, useContext } from 'react';

let data=createContext();
let data1=createContext();


function App() {
  

  let name="Anashafeez";
  let gender="male";
  return (
   <>
    <data.Provider value={name}>
      <data1.Provider value={gender}>
          <ChildA  />
       </data1.Provider>
    </data.Provider>

   </>
  );
}

export default App;
export {data};
export {data1};
