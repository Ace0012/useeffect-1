import React,{useState,useEffect} from 'react'

  
import Saved from './Saved.jsx'
const Todo2 = () => {
const [todos,setTodos] = useState([])
const [query,setQuery] = useState("")


// useEffect(()=>{
//     fetch("http://localhost:8080/tasks")
//     .then((res)=>res.json())
//     .then((data)=>{ setTodos(data)})},[])



    const saveInfo = () => {
        fetch("http://localhost:8080/tasks", {
          method: 'POST',
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
    
            text: query,
            status: true,
          })
        })
          .then((res) => res.json())
    
          .then((data) => {
            setTodos([...todos]);

            setQuery("");
          });
      };





const handleAdd = ()=>{

        setTodos([...todos,{value:query,id:1}])
        }

  return (
    <div>
<div>
<input type="text" placeholder = "Add Item" value={query} onChange = {(e)=>{setQuery(e.target.value)}} />

<button onClick= {handleAdd} >+</button>
</div>
{todos.map((item)=>{
    return (
      

        <div key = {item.id}>
            {item.value}
          
<Saved item ={item} id= {Date.now()} info = {saveInfo}/>
            </div>


        

    )
})}


    </div>
  )
}

export default Todo2