import React from 'react';

const Form = () => {
    return (
        <div className='container-fluid  p-0 m-0'>
            <div className='row'>
                <center><h3 id="heading">This is a single Registration Form made using Bootstrap</h3></center>
            </div>
            <div className='row pt-5 border border-3 border-black  ' id="back">
                <div className='col-sm-2'></div>
                <div className='col-sm-4'> <form>
    <fieldset disabled="">
      
      <div className="mb-3">
       
        <input
          type="text"
          id="disabledTextInput"
          className="form-control rounded-pill border-2 border-black"
          placeholder="Disabled input"
        />
      </div>
      <div className="mb-3">
       
        <select id="disabledSelect" className="form-select rounded-pill border-2 border-black">
          <option>Disabled select</option>
        </select>
      </div>
     
    </fieldset>
  </form></div>
                <div className='col-sm-4'> <form>
    <fieldset disabled="">
     
      <div className="mb-3">
      
        <input
          type="text"
          id="disabledTextInput"
          className="form-control rounded-pill border-2 border-black"
          placeholder="Disabled input"
        />
      </div>
      <div className="mb-3">
       
        <select id="disabledSelect" className="form-select rounded-pill border-2 border-black">
          <option>Disabled select</option>
        </select>
      </div>
      <div className="mb-3">
        
      </div>
      <div className="mb-3">
        <div className="form-check">
          <input
            className="form-check-input rounded-pill border-2 border-black"
            type="checkbox"
            id="disabledFieldsetCheck"
            disabled=""
          />
          <label className="form-check-label" htmlFor="disabledFieldsetCheck">
            Can't check this
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      
    </fieldset>
  </form></div>
                <div className='col-sm-2'></div>




            </div>
             
            
        </div>
    );
}

export default Form;
