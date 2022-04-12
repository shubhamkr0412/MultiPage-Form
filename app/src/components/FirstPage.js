import React from "react";
import "../App.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const FirstPage = () => {
  let history=useNavigate();

  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(age =="" || name =="" || date ==""){
      alert("Complete the form")
    }
    else{
      const payload={
        name:name,
        age:age,
        date:date,
        required:true
       }
       fetch("http://localhost:3001/todos",{
         method:"POST",
         body:JSON.stringify(payload),
         headers:{
           "content-type":"application/json",
         },
       });
      history("/second");
    }
  }

  
  return (
    

    <div className="center">
      <form onSubmit={handleSubmit}>
        <div className="centerr">
          {" "}
          <label> Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
        </div>
        <br></br>
        <div className="centerr">
          {" "}
          <label> Age:</label>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)}></input>
        </div>
        <br></br>
        <div className="centerr">
          {" "}
          <label> Dob:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)}></input>
        </div>
        <div className="btn">
          
          <button type="submit" className="btnn" >Click Me</button>
        </div>
      </form>
    </div>
  );
};

export default FirstPage;
