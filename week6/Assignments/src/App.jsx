import React, { useMemo, useState } from 'react'

const App = () => {
  const [input,setInput]=useState(0);
 const Answer=useMemo(()=>{
  let value=1;
  for(let i=1;i<=input;i++) {
    value=i*value;

  }return value;
 },[input])

  
  return (
    <div>
      <input type="text" value={input}
      onChange={(e)=>setInput(Number(e.target.value))} />
    <p>Calculated value {Answer}</p>
    </div>
  )
}

export default App
