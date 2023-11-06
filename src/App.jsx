import React from 'react'
import Navbar from './Components/Navbar'
import TaskInput from './Components/TaskInput'

const App = () => {
  return (
    <div className='main-app'>
      <Navbar />
      <TaskInput />
    </div>
  )
}

export default App