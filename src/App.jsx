import React from 'react'
import Navbar from './Components/Navbar'
import TaskInput from './Components/TaskInput'
import TaskItem from './Components/TaskItem'
import TaskCount from './Components/TaskCount'

const App = () => {
  return (
    <div className='main-app'>
      <Navbar />
      <TaskInput />
      <TaskCount />
      <TaskItem />
      <TaskItem />
    </div>
  )
}

export default App