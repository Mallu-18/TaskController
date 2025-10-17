
import Taskform from "./Components/Taskform";
import Tasklist from "./Components/Tasklist";
import Progresstracker from "./Components/Progresstracker";
import { useEffect, useState } from "react";  
// import './App.css'
import './Style.css'

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  });

  const addTask = (task) => {
    setTasks([...tasks,task]);
  }

  const updateTask = (updateTask, index)=> {
    const newtask = [...tasks];
    newtask[index] = updateTask;
    setTasks(newtask);
  }

  const deleteTask = (index)=> {
      setTasks(tasks.filter((_, i) => i != index));
  }
  return(
    <div>
      <h1>Task Controller</h1>
      <p>Our friendly TaskManager</p>
      <Taskform addTask = {addTask}/>
      <Tasklist tasks = {tasks} 
      updateTask = {updateTask} 
      deleteTask = {deleteTask}/>
      <Progresstracker tasks = {tasks}/>
      <button>Clear all tasks</button>
    </div>
  )
}