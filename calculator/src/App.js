
import  {useState} from 'react';
import Display from './components/Display';
import Displaybutton from './components/Displaybutton';


const App = () => {
   
 
let[calval ,setcalvalue]=useState("");

   function clickbutton(buttontext){
    if(buttontext=="AC")
    {
       setcalvalue("");
    }
    else if(buttontext=="=")
    {
      let addvalue=eval(calval);
      setcalvalue(addvalue);
    }
    else{
      let newclick=(calval+buttontext);
      setcalvalue(newclick);
    }
   }

  return (
    <>
    <Display  value={calval} />
    
    <Displaybutton buttontype={clickbutton}/>
    </>
  );
}

export default App;

