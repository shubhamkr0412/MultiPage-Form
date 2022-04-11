import React from "react";
import "../App.css";
import { useState } from "react";
const FirstPage = () => {
  const [text, setText] = useState("");
  console.log(text);
  // const [todos,setTodos]=useState([]);
  return (
    <div>
      <input
        type="text"
        
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      />
      <button onClick={()=>{
       const payload={
        title:text,
        status:false
       }
       fetch("http://localhost:3001/todos",{
         method:"POST",
         body:JSON.stringify(payload),
         headers:{
           "content-type":"application/json",
         },
       });
      }}>Submit</button>
      {[].map((e)=>(<div>{e}</div>))}
    </div>
  );
}

export default FirstPage;
