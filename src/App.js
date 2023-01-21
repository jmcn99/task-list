import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'


function App() {

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


  return (
    <div className="App">
      <Header />
      <Tasks tasks={tasks} />
    </div>
    
  );
}

export default App;
