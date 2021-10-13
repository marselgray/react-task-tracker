import { useState } from "react"
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from "./components/AddTask";

const App = () => {

  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctors Appt',
            day: 'Feb 5th at 2:30PM',
            reminder: true,
        },
        {
            id: 2,
            text: 'School Meeting',
            day: 'Feb 6th at 1:30PM',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: 'Feb 5th at 2:30PM',
            reminder: false,
        }
    ]
  )

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

  return (
    <div className="container">
        < Header />
        <AddTask />
        {tasks.length > 0 ? < Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks'}
    </div>
  );
}

export default App;
