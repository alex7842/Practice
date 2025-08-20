import React, { useEffect, useState } from "react";
import axios from "axios";

const TodoPage = () => {
  const [task, setTask] = useState();
  const [timestamp, setTimestamp] = useState();
    const [allTasks, setAllTasks] = useState();
    useEffect(() => {
        const fetch =async () => {
            const res = await axios.get(`${import.meta.env. VITE_BASE_URL}/todo/get`)
          const data=res?.data
          setAllTasks(data)
        }
       fetch();
    },[task])
  const handleSubmit = async() => {
      if (!task) return;
      console.log("task", task);

      try {
          axios.post(`${import.meta.env.VITE_BASE_URL}/todo/create`, { title:task,timestamp }).then((res) => {
              console.log("data geetted");
              alert("data getted");
              setTask(res);
          });
      } catch (err) {
          console.error("erros in adding task", err);
      }
  };

  


  const handleUpdate = async(id) => {
    axios.patch(`${import.meta.env.VITE_BASE_URL}/todo/update/${id}`, { title:"updated alex",timestamp }).then((res) => {
              console.log("data geetted");
              alert("data getted");
              setTask(res);
          });
  }
  return (
    <div className="flex-col flex justify-center items-center m-auto gap-3">
      <h1 className="text-xl text-violet-500 bg-black py-2 px-2">
        Welcome to ToDo App
      </h1>
      <div className="flex flex-row gap-2">
        <input
          className="bg-gray-700"
          type="text"
          placeholder="Enter your task"
         
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type="date"
          onChange={(e)=>setTimestamp(e.target.value)}
        />

         
         
        <button onClick={handleSubmit} className="cursor-pointer bg-violet-600 text-white px-2 py-2">Add</button>
      </div>
      <div className="container">
        <h3>All tasks</h3>
        {
         allTasks?.todos?.map((item) => {
            return <div className="flex flex-row gap-2 py-2 bg-gradient-to-br text-2xl text-black">
              <p>{item.title}</p>
              <p>{item.timestamp}</p>
              <button className="w-20  bg-violet-500 text-white p-1 cursor-pointer rounded-2xl" onClick={()=>handleUpdate(item._id)}>update </button>
              </div>
          })
        }
      </div>
    </div>
  );
};

export default TodoPage;
