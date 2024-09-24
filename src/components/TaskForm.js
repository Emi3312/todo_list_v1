// src/components/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('Personal');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') return;
    addTask({ text: task, category, dueDate, completed: false });
    setTask('');
    setCategory('Personal');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Descripción de la tarea"
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Personal">Personal</option>
        <option value="Trabajo">Trabajo</option>
        <option value="Estudios">Estudios</option>
        <option value="Otros">Otros</option>
      </select>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">Añadir</button>
    </form>
  );
};

export default TaskForm;
