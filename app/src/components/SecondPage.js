import React from 'react'
import { useState } from "react";
const SecondPage = () => {
  const [stat, setStat] = useState("");
  const [addr, setAddr] = useState("");
  const [pin, setPin] = useState("");
  const handleSubmitt=(e)=>{
    e.preventDefault();
    
      alert("Completed");
   
  }
  return (
    <div className="center">
      <form >
        <div className="centerr">
          {" "}
          <label> State:</label>
          <input type="text" value={stat} onChange={(e) => setStat(e.target.value)}></input>
        </div>
        <br></br>
        <div className="centerr">
          {" "}
          <label> Address:</label>
          <input type="number" value={addr} onChange={(e) => setAddr(e.target.value)}></input>
        </div>
        <br></br>
        <div className="centerr">
          {" "}
          <label> Pincode</label>
          <input type="date" value={pin} onChange={(e) => setPin(e.target.value)}></input>
        </div>
        <div className="btn">
          
          <button  className="btnn" onClick={()=>{
       const payload={
        stat:stat,
        addr:addr,
        pin:pin,
       
       }
       fetch("http://localhost:3001/todos1",{
         method:"POST",
         body:JSON.stringify(payload),
         headers:{
           "content-type":"application/json",
         },
       });
      }}>Click Me</button>
        </div>
      </form>
    </div>
  )
}

export default SecondPage