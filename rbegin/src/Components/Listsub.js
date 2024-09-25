import React from 'react';

const Listsub = () => {
   
    let sname=['C','C#','C','JAVA','PYTHON','C++','MERN','DJANGO'];
  
   
   
    return (
        <div className='container'>
         <div className='row'>
         <div className='col-sm-2'></div>
            <div className='col-sm-8'>
            <ul className="list-group border border-2 border-black text-black ">
                {sname.map((item=><li className="list-group-item fs-3">{item} <button  className=' btn btn-success ' style={{float:'right'}} onClick={()=> { alert(`${item} purchased`)}}>Buy</button></li>))};
                 
    
  
  </ul>
            </div>
            <div className='col-sm-2'></div>
         </div>
       </div>
    );
}





export default Listsub;
