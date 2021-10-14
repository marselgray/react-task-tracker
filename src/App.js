import { useState, useEffect } from "react"
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from "./components/AddTask";

const App = () => {

  const[showAddTask, setShowTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {

    const getTasks = async() => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks();
  }, [])

  // Fetch Tasks
  const fetchTasks = async() => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();

    return data;
  }

  // Delete Task
  const deleteTask = (id) => {
    // console.log('delete', id);
    setTasks(tasks.filter((task) => task.id !== 
    id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    // console.log(id);
    setTasks(tasks.map((task) => 
      task.id === id ? {...task, reminder: !task.reminder} : task )
    )
  }


  // Add Task
  const addTask = (task) => {
     const id = Math.floor(Math.random() * 1000) + 1
    
     const newTask = {id, ...task}
     setTasks([...tasks, newTask])
    
  }

  return (
    <div className="container">
        < Header 
          onAdd={() => setShowTask(!showAddTask)} 
          showAdd={showAddTask}
        />
        {showAddTask &&  < AddTask onAdd={addTask} />}
        {tasks.length > 0 ? < Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks'}
    </div>
  );
}

export default App;
