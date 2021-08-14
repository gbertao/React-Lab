import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([
    {
      id:1,
      text: 'Giovanni',
      day: '01/01/01',
      reminder: true,
    },
    {
      id:2,
      text: 'Gi',
      day: '02/02/02',
      reminder: true,
    },
    {
      id:3,
      text: 'Gio',
      day: '03/03/03',
      reminder: false,
    },
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1

    const newTask = { id, ...task }

    setTasks([...tasks, newTask])
    console.log(tasks)
  }

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
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask}/>
      ) : (
        'No Tasks to show'
      )}
    </div>
  );
}

export default App;
