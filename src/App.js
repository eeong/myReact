import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

const App = () => {
  const [tasks , setTasks] = useState([
    {
      id: 1,
      text: 'abc',
      day: '134',
      reminder: true
    },
    {
      id: 2,
      text: 'ds',
      day: '34',
      reminder: true
    },
    {
      id: 3,
      text: 'qsc',
      day: '534',
      reminder: false
    },
  ])

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=>{return task.id !== id}));
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=> task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="App">
      <div className="container">
        <Header></Header>
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Tasks>
        : 'There are no Task'
      }
      </div>
    </div>
  );
}

export default App;
