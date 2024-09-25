import React from 'react';

const Todoitem = ({TODOtask,TODOdate,todoitemdelete}) => {

   
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-4' id='A2'>{TODOtask}</div>
                <div className='col-sm-4' id='A3'>{TODOdate}</div>
                <div className='col-sm-4' id='A4'>
                <button type="button" class="btn btn-danger" onClick={()=>todoitemdelete(TODOtask)}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default Todoitem;
