import React, { useState } from 'react';

const InputField = ({onnewitems}) => {

   let [Name,setName]=useState();
   let [Date,setDate]=useState();

   function settingname(event)
   {
      setName(event.target.value);
   }

   function settingdate(event)
   {
      setDate(event.target.value);
   }

   function handlingbutton(){
    onnewitems(Name,Date);
    setName("");
    setDate("");
   }


  


    return (
        <div className='container' id="ab">
            <div className='row '>
                <div className='col-sm-4' id="A2">
                   <input className="form-control border border-black border-2" type="text" value={Name} aria-label="readonly input example" placeholder="Enter your task" onChange={settingname}></input>
                </div>
                <div className='col-sm-4' id="A3">
                <input class="form-control border border-black border-2" type="date" value={Date}  aria-label="readonly input example" placeholder="Enter date" onChange={settingdate}></input>
                </div>
                <div className='col-sm-4' id="A4">
                <button type="button" className="btn btn-success  border border-black border-2" onClick={ handlingbutton}>Add</button>
                </div>
            </div>
            
        </div>
    );
}

export default InputField;
