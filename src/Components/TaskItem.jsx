import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const TaskItem = () => {
    return (
        <div className="task-item">
            <div className="left">
                <input type="checkbox" name="" id="" />
                Hello world
            </div>
            <div className="right">
                <DeleteForeverIcon />
            </div>
        </div>
    )
}

export default TaskItem