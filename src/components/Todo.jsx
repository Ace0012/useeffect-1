import React, { useState, useEffect } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTasks, setnewTasks] = useState("");
  const saveInfo = () => {
    fetch("http://localhost:8080/tasks", {
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({

        text: newTasks,
        status: true,
      })
    })
      .then((res) => res.json())

      .then((data) => {
        setTasks([...tasks, data]);
        setnewTasks("");
      });
  };
  useEffect(() => {
    fetch("http://localhost:8080/tasks")
      .then((res) => 
        res.json())
      .then((data) => {
        setTasks(data)
        console.log(data)
      })
  }, []);

  return (
    <div>
  <div>

        <input
          type="text"
          value={newTasks}
          onChange={(e) => {
            
            setnewTasks(e.target.value);
            
          }}
          />

        <button onClick={()=>{saveInfo()}}>+</button>
          </div>

     <div>

  
  
    {tasks.map(iten=>{
      return <div key ={iten.id}>{iten.text}</div>

    })}
          </div>
    </div>
  );
};

export default Todo;
