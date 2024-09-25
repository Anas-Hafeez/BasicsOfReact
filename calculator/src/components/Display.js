import React from 'react';

const Display = ({value}) => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-4'></div>
                <div className='col-sm-4'>
                <input className="form-control border border-5 border-black mt-4" type="text"  aria-label="readonly input example" readonly value={value}></input>
                </div>
                <div className='col-sm-4'></div>
            </div>
        </div>
    );
}

export default Display;
