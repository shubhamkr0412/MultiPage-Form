import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const SecondPage = () => {
  const [stat, setStat] = useState("");
  const [addr, setAddr] = useState("");
  const [pin, setPin] = useState("");
  let history=useNavigate();
  const handleSubmitt=(e)=>{
    e.preventDefault();
    if(stat =="" || addr =="" || pin ==""){
      alert("Complete the form")
    }
    else{
      const payload={
        stat:stat,
        addr:addr,
        pin:pin,
        required:true
       }
       fetch("http://localhost:3001/todos1",{
         method:"POST",
         body:JSON.stringify(payload),
         headers:{
           "content-type":"application/json",
         },
       });
      alert("form completed");
    }
  }
  return (
    <div className="center">
      <form  onSubmit={handleSubmitt}>
        <div className="centerr">
          {" "}
          <label> State:</label>
          <input type="text" value={stat} onChange={(e) => setStat(e.target.value)}></input>
        </div>
        <br></br>
        <div className="centerr">
          {" "}
          <label> Address:</label>
          <input type="text" value={addr} onChange={(e) => setAddr(e.target.value)}></input>
        </div>
        <br></br>
        <div className="centerr">
          {" "}
          <label> Pincode</label>
          <input type="number" value={pin} onChange={(e) => setPin(e.target.value)}></input>
        </div>
        <div className="btn">
          
          <button type='submit' className="btnn" >Click Me</button>
        </div>
      </form>
    </div>
  )
}

export default SecondPage