import React from "react";
import "../App.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const FirstPage = () => {
  let history=useHistory();

  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  console.log(age);
  console.log(name);
  console.log(date);
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(age =="" && name =="" && date ==""){
      alert("Hello")
    }
    else{
     history.push("/second");
    }
  }

  // const [todos,setTodos]=useState([]);
  return (
    // <div>
    //   <input
    //     type="text"

    //     onChange={(e) => setText(e.target.value)}
    //     placeholder="Enter text"
    //   />
    //   <button onClick={()=>{
    //    const payload={
    //     title:text,
    //     status:false
    //    }
    //    fetch("http://localhost:3001/todos",{
    //      method:"POST",
    //      body:JSON.stringify(payload),
    //      headers:{
    //        "content-type":"application/json",
    //      },
    //    });
    //   }}>Submit</button>
    //   {[].map((e)=>(<div>{e}</div>))}
    // </div>

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
          
          <button type="submit" className="btnn" onClick={()=>{
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
      }}>Click Me</button>
        </div>
      </form>
    </div>
  );
};

export default FirstPage;
