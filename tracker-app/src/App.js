import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([
    {
      id:1,
      name: 'Giovanni',
      day: '01/01/01',
      reminder: true,
    },
    {
      id:2,
      name: 'Gi',
      day: '02/02/02',
      reminder: true,
    },
    {
      id:3,
      name: 'Gio',
      day: '03/03/03',
      reminder: false,
    },
  ])

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map(
        (task) => task.id === id ? {...task, reminder: !task.reminder} : task
      )
    )
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask}/>
      ) : (
        'No Tasks to show'
      )}
    </div>
  );
}

export default App;
