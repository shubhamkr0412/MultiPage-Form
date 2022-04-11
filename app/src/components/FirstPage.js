import React from "react";
import "../App.css";
import { useState } from "react";
const FirstPage = () => {
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  console.log(age);
  console.log(name);
  console.log(date);

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
      <form>
        <div className="centerr">
          {" "}
          <label> Name:</label>
          <input type="text" required onChange={(e) => setName(e.target.value)}></input>
        </div>
        <br></br>
        <div className="centerr">
          {" "}
          <label> Age:</label>
          <input type="number" required onChange={(e) => setAge(e.target.value)}></input>
        </div>
        <br></br>
        <div className="centerr">
          {" "}
          <label> Dob:</label>
          <input type="date" required onChange={(e) => setDate(e.target.value)}></input>
        </div>
        <div className="btn">
          <button className="btnn" onClick={()=>{
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
