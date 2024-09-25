
import { createContext } from 'react';
import './App.css';
import ChildA from './ChildA';

let data= createContext();
let data1=createContext();
let data2=createContext();

function App() {
  let name="ANAS HAFEEZ"
  let gender="MALE"
  let age="22"
  
  return (
   <>
   <h1>UseContext</h1>
   <data.Provider value={name} >
     <data1.Provider value={gender}>
       <data2.Provider value={age}>
           <ChildA />
        </data2.Provider>
   </data1.Provider>
   </data.Provider>
   
   </>
  );
}

export default App;
export {data,data1,data2};
