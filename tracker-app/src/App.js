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

  return (
    <div className="container">
	  <Header />
	  <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
