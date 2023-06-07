import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = async (newTask) => {
    try {
      const response = await fetch("http://localhost:8080/TuTabla", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      if (response.ok) {
        const createdTask = await response.json();
        setTasks([...tasks, createdTask]);
      } else {
        console.error("Error adding task:", response.status);
      }
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const updateTask = async (updatedTask) => {
    try {
      const response = await fetch(`http://localhost:8080/TuTabla/${updatedTask.taskId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });

      if (response.ok) {
        const updatedTask = await response.json();
        setTasks(tasks.map((task) => (task.taskId === updatedTask.taskId ? updatedTask : task)));
      } else {
        console.error("Error updating task:", response.status);
      }
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div>
      <h1>Task Management</h1>
      <TaskForm addTask={addTask} />
      <hr />
      <h2>Task List</h2>
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;


