import { useState } from "react"

export default function Taskform({addTask}) {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('medium');
    const [category, setCategory] = useState('general');
    const [timing, setTime] = useState('00:00');

    const handlesubmit = (e) => {
        e.preventDefault(); //refresh
        addTask({text: task, priority, category, timing, completed: false});

        //reset
        setTask('');
        setPriority('medium');
        setCategory('general');
        setTime('00:00');
    }

    return(
        <form onSubmit={handlesubmit} className="task-form">
            <div id="inp">
                <input type="text" placeholder="Enter the task" required 
                value={task}
                onChange={(e) => setTask(e.target.value)}/>
                <button type="submit" >Add Task</button>
                {/* <h1>{task} {priority} {category}</h1> */}
            </div>

            <div id="btns">
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>

                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="general">General</option>
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                </select>


                 <input type="time" id="time" name="time" value={timing} 
                 onChange={(e) => setTime(e.target.value)}
                 ></input>
                
            </div>
        </form>
    )
}