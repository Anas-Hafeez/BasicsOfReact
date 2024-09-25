import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './CounterSlice';

const Counter = () => {
   const count=useSelector((state)=>state.counter.count)
   let dispatch= useDispatch();
    return (
       
        <>
    <h1>Helllo..<br></br>I'm Counter App</h1>
    <button type="button" className="btn btn-success  m-2" onClick={()=>{dispatch(increment())}}>Increment</button>
    <span className='bg-dark-subtle rounded-circle fw-bolder'>{count}</span>
    <button type="button" className="btn btn-success  m-2"  onClick={()=>{dispatch(decrement())}}>Decrement</button>
    </>
    );
}

export default Counter;
