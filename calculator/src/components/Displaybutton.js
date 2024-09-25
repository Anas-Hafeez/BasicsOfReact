import React from 'react';

const Displaybutton = ({buttontype}) => {
    let buttonname=["C","0","1","2","3","4","5","6","7","8","9","+","-","*","/","AC","="];
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-4'></div>
                <div className='col-sm-4'>
                    {buttonname.map((button=><button id='butt' type="button" className="btn btn-primary p-3 border border-3 border-black text-center mt-4 m-lg-1 rounded-circle" onClick={()=>buttontype(button)}>{button}</button>))}
                </div>
                <div className='col-sm-4'></div>
            </div>
        </div>
    );
}

export default Displaybutton;
