import React from "react";
import "../App.css";
import { useState } from "react";
const FirstPage = () => {
  const [text, setText] = useState("");
  // const [todos,setTodos]=useState([]);
  return (
    <>
      <input
        type="text"
        
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      />
      <button onClick={()=>{
       const payload={
         title:text,
         status:false,
       };
       fetch("http://localhost:3001/todos",{
         method:"POST",
         body:JSON.stringify(payload),
         header:{
           "content-type":"application/json",
         },
       })
      }}>Submit</button>
      {[].map((e)=>(<div>{e}</div>))}
    </>
  );
}

export default FirstPage;
