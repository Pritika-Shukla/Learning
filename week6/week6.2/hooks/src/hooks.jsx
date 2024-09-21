import React, { useEffect, useState,useRef } from 'react'

const Code = () => {
    const [incometax,setIncometax]=useState(2000)
    const divRef=useRef();

    useEffect(()=>{
        setTimeout(()=>{
            divRef.current.innerHTML=10
        },4000);
       
    },[]);
  return (
    <div>
      hi  <div ref={divRef}>{incometax}</div>
    </div>
  )
}

export default Code
