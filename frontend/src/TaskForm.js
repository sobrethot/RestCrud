import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./TaskForm.css";

const TaskForm = ({ addTask }) => {
  const [taskId, setTaskId] = useState("");
  const [description, setDescription] = useState("");
  const [creationDate, setCreationDate] = useState(new Date());
  const [valid, setValid] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (taskId && description && creationDate) {
      const newTask = {
        taskId: Number(taskId),
        description,
        creationDate,
        valid,
      };

      try {
        // Your fetch request code here
      } catch (error) {
        console.error("Error adding task:", error);
      }

      setTaskId("");
      setDescription("");
      setCreationDate(new Date());
      setValid(false);
    } else {
      alert("Please fill in all the fields.");
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="taskId">Task ID:</label>
        <input
          type="number"
          id="taskId"
          value={taskId}
          onChange={(e) => setTaskId(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="creationDate">Creation Date:</label>
        <DatePicker
          id="creationDate"
          selected={creationDate}
          onChange={(date) => setCreationDate(date)}
          dateFormat="yyyy-MM-dd"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="valid">Valid:</label>
        <input
          type="checkbox"
          id="valid"
          checked={valid}
          onChange={() => setValid(!valid)}
          required
        />
      </div>
      <button type="submit" className="submit-btn">Add Task</button>
    </form>
  );
};

export default TaskForm;
