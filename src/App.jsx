
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

  const clearTask = () => {
    setTasks([]);
  }
  return(
    <div className="App">
      <header>
      <h1 className="title">Task Buddy</h1>
      <p className="tagline">Our friendly TaskManager</p>
      </header>
      <Taskform addTask = {addTask}/>
      <Tasklist tasks = {tasks} 

      updateTask = {updateTask} 
      deleteTask = {deleteTask}/>
      <Progresstracker tasks = {tasks}/>

      {tasks.length>0 &&
      (<button onClick={clearTask} className="clear-btn">Clear all tasks</button>)}
    </div>
  )
}