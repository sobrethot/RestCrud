import React, { useEffect, useState } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch("http://localhost:8080/TuTabla");
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await fetch(`http://localhost:8080/TuTabla/${taskId}`, {
        method: "DELETE",
      });
      setTasks(tasks.filter((task) => task.taskId !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.taskId}>
          Task ID: {task.taskId}
          <br />
          Description: {task.description}
          <br />
          Creation Date: {task.creationDate}
          <br />
          Valid: {task.valid ? "Yes" : "No"}
          <br />
          <button onClick={() => deleteTask(task.taskId)}>Delete</button>
          <br />
          <br />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;


