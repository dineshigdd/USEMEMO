import { useState, useMemo, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function calculate( length ){
  let sum = 0;
    for( let i = 0; i < length ; i++ ){
   
      sum = sum + i;
      console.log( i );
      
    }

return sum;
  
}

export function Mymemo({length }) {

  const meorizeValue = useMemo(() => calculate( length), [length]);
  return <>{ meorizeValue }</>;
} 

export function Total({length }) {

  const total = calculate( length);
  return <>{ total }</>;
} 


function App() {
  const [ count, setCount ] = useState(0);
  const [ length, setLength ]= useState(100);
  const [ checked, setChecked ] = useState(true);
  const [ totalCounter , setTotalCounter ] = useState(0);
  const [state, setState ] = useState(<Mymemo length={ length }/>);


  
 
  const handleChange = () => {
    setTotalCounter(0);
    setChecked(!checked);
  };

 const reset = ()=> { 
  setCount(0) ; 
  setLength(10) ; 
  setState(10);
  setTotalCounter(0)
} 

 return (
    <div className="App">  
    <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        Use useMemo
      </label>
     
      <div>
       <button onClick={ () => { !checked ? 
              setState( <Total length={ length } totalCounter={ totalCounter }/>): 
              setState( <Mymemo length={ length } totalCounter={ totalCounter }/>); 
              setTotalCounter( totalCounter + 1 )} }>Get Total</button>
              <div>
              <p>Total:{ state }</p>
              <p>You call getTotal { totalCounter} times</p>
              </div>
     </div>
      <div>
          <button onClick={ ()=> setLength( length * 10 ) }>Increase limit</button>
          <strong>{ length }</strong>
          <button onClick={ ()=>  setLength( length / 10 )  }>Decrease limit</button>
      </div>

      <button onClick={ ()=> setCount( count + 1) }>Increase counter</button>Counter: { count }<br/>
      <button onClick={ reset }>Reset</button>
  

 
       
      	<p id="demo"></p>
    
    </div>
  )
}

export default App
