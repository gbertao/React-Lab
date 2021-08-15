import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
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

  const fetchTask = async (id) => {
    const res = await fetch(`http://192.168.0.11:7000/tasks/${id}`)
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
  const toggleReminder = async (id) => {
    const tgtTask = await fetchTask(id)
    const updTask = { ...tgtTask, reminder:!tgtTask.reminder }

    const res = await fetch(`http://192.168.0.11:7000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask),
    })

    const data = await res.json()

    setTasks(
      tasks.map(
        (task) => task.id === id ? {...task, reminder: data.reminder} : task
      )
    )
  }

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://192.168.0.11:7000/tasks/${id}`, {method: 'DELETE',})
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <Router>
      <div className="container">
        <Header onAdd={() => setShowAdd(!showAdd)} showAdd={showAdd}/>
        <Route path='/' exact render={(props) => (
          <>
            {showAdd && <AddTask onAdd={addTask}/>}
            {tasks.length > 0 ? (
              <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask}/>
            ) : (
              'No Tasks to show'
            )}
          </>
        )}/>
        <Route path='/about' component={About}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
