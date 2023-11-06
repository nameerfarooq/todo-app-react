import React from 'react'

const TaskInput = () => {
    return (
        <div className='task-input'>
            <form onSubmit="">
                <input type="text" />
                <button type='submit'>Add Task</button>
            </form>
        </div>
    )
}

export default TaskInput