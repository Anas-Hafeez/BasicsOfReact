import React, { useState } from 'react';
import Appname from './component/Appname';
import './component/style.css'
import InputField from './component/InputField';
import Itemcontainer from './Itemcontainer';


const App = () => {

   let initodoitem=[{
    name:'ujjwal',
    duedate:'02/02/2002'
   }]

   let [todoitem, settodoitem]=useState(initodoitem);

   function onsubmit(itemname,itemdate){
    console.log(`item name ${itemname} itemdate ${itemdate}`);
    let newitems=[...todoitem,{name:itemname, duedate:itemdate}]
    settodoitem(newitems);
   }

   function handelingdelete()
   {
      let newdeleteitem = [...todoitem.filter(item=>item.Name)];
      settodoitem(newdeleteitem);
   }
  
  return (
    <>
   <div className='container' id='abc'>
      <Appname/>
      <InputField onnewitems={onsubmit}/>
      <Itemcontainer Addtodovalue={todoitem} ondelete={handelingdelete}/>
      
      
   </div>
         
    </>
  );
}

export default App;
