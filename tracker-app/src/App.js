import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAdd, setShowAdd] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://192.168.0.11:7000/tasks')
    const data = await res.json()

    return data
  }

  // Add Task
  const addTask = async (task) => {
    const res = await fetch('http://192.168.0.11:7000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    setTasks([...tasks, data])

    //const id = Math.floor(Math.random() * 10000) + 1

    //const newTask = { id, ...task }

    //setTasks([...tasks, newTask])
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
  const deleteTask = async (id) => {
    await fetch(`http://192.168.0.11:7000/tasks/${id}`, {method: 'DELETE',})
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAdd(!showAdd)} showAdd={showAdd}/>
      {showAdd && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask}/>
      ) : (
        'No Tasks to show'
      )}
    </div>
  );
}

export default App;
