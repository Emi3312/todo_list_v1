import React from 'react';

const TaskItem = ({ task, index, toggleComplete, deleteTask }) => {
    return (
        <li className={task.completed ? 'completed' : ''}>
            <div className="task-info">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(index)}
                />
                <span>{task.text}</span>
            </div>
            <div className="task-meta">
                <span className="category">{task.category}</span>
                {task.dueDate && <span className="due-date">Due: {task.dueDate}</span>}
                <button onClick={() => deleteTask(index)}>Eliminar</button>
            </div>
        </li>
    );
};

export default TaskItem;
