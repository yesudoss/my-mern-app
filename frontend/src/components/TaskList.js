import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Task from './Task';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/tasks').then((res) => setTasks(res.data));
  }, []);

  const deleteTask = (id) => {
    axios.delete(`http://localhost:5000/tasks/${id}`).then(() => {
      setTasks(tasks.filter((task) => task._id !== id));
    });
  };

  const toggleComplete = (id) => {
    const task = tasks.find((task) => task._id === id);
    axios.put(`http://localhost:5000/tasks/${id}`, { completed: !task.completed }).then((res) => {
      setTasks(tasks.map((task) => (task._id === id ? res.data : task)));
    });
  };

  return (
    <div>
      {tasks.map((task) => (
        <Task key={task._id} task={task} onDelete={deleteTask} onToggle={toggleComplete} />
      ))}
    </div>
  );
};

export default TaskList;
