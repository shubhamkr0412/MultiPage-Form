import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const DisplayPage = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getList();
  },[]);
  const getList = () => {
    fetch("http://localhost:3001/todos")
      .then(function (response) {
        response.json().then(function (data) {
          setList(data);
        });
      })
      .catch(function (error) {
        console.log("Fetch Error:", error);
      });
  };
  return (
    <div>
      <div>
        {list.map((e) => {
          <div>
            {e.name}
            
          </div>;
        })}
      </div>
    </div>
  );
};

export default DisplayPage;
