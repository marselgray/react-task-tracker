import { useState } from "react"
import Header from './components/Header';
import Tasks from './components/Tasks';

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

  return (
    <div className="container">
        < Header />
        {tasks.length > 0 ? < Tasks tasks={tasks} onDelete={deleteTask} /> : 'No Tasks'}
        
    </div>
  );
}

export default App;
