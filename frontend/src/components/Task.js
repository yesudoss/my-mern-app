import React from 'react';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div>
      <span style={{ textDecoration: task.completed ? 'line-through' : '' }}>
        {task.title}
      </span>
      <button onClick={() => onToggle(task._id)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => onDelete(task._id)}>Delete</button>
    </div>
  );
};

export default Task;
