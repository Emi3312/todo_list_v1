// src/components/TaskList.js
import React, { useState } from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Completed') return task.completed;
    if (filter === 'Pending') return !task.completed;
    return true;
  }).filter((task) =>
    task.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="task-list">
      <div className="filters">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">Todas</option>
          <option value="Completed">Completadas</option>
          <option value="Pending">Pendientes</option>
        </select>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar tareas..."
        />
      </div>
      <ul>
        {filteredTasks.map((task, index) => (
          <TaskItem
            key={index}
            index={index}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
      {tasks.length > 0 && (
        <button className="delete-completed" onClick={() => {
          const confirmed = window.confirm('¿Estás seguro de eliminar todas las tareas completadas?');
          if (confirmed) {
            deleteTask('completed');
          }
        }}>
          Eliminar Completadas
        </button>
      )}
    </div>
  );
};

export default TaskList;
