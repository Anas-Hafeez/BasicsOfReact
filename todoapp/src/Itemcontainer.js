import React from 'react';
import Todoitem from './component/Todoitem';


const Itemcontainer = ({Addtodovalue,ondelete}) => {
    return (
        <div>
      {Addtodovalue.map((item=><Todoitem TODOtask={item.name} TODOdate={item.duedate} todoitemdelete={ondelete}/>))}
       
            
        </div>
    );
}

export default Itemcontainer;
