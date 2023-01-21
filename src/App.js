import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

import { useState } from 'react'


function App() {
  const[showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Meeting with Landlord",
        day: 'Jan 22, at 1:30pm',
        reminder: true
    },
    {
        id: 2,
        text: "Grocery shopping",
        day: "Jan 23, at 2:00pm",
        reminder: false
    },
    {
        id: 3,
        text: '1805 Tutorial',
        day: 'Jan 23, at 8:30am',
        reminder: true
    }
])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks To Show' }
    </div>
    
  );
}

export default App;
