import React from 'react';

const Input = ({inpu}) => {

 

    return (
        <div className='Container-fluid'>
            <div className='row'>
                <div className='col-sm-4'></div>
                <div className='col-sm-4 '>
                    <center><input type='text' placeholder='Enter your item' className='border border-3 border-black' onKeyDown={(event)=>inpu(event)}></input></center>
                </div>
                <div className='col-sm-4'></div>
            </div>
            
        </div>
    );
}

export default Input;
