import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

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

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask}/>
      ) : (
        'No Tasks to show'
      )}
    </div>
  );
}

export default App;
