import React, { useContext } from 'react';
import { data } from './App';
import { data1 } from './App';
import { data2 } from './App';





const ChildC = () => {
  let value1=useContext(data);
  let value2=useContext(data1);
  let value3=useContext(data2)
    return (
        <div>
           <h1>hi,my name is {value1} my gender is {value2} my age is {value3} </h1>
        </div>
    );
}

export default ChildC;
