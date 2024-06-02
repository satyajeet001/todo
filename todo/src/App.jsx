import React, { useState } from "react";
import Name from "./assets/Name";

function App() {
  const [taskName, setTaskName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = { taskName, startDate, endDate };

    const response = await fetch("https://todo-api-two.vercel.app//todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    if (response.ok) {
      alert("Todo item added successfully");
      setTasks([...tasks, newTask]); // Add new task to the list
      setTaskName("");
      setStartDate("");
      setEndDate("");
    } else {
      alert("Failed to add todo item");
    }
  };

  return (
    <>
      <div className="todo-container">
        <h1>Todo App</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="taskName">Task Name</label>
            <input
              type="text"
              className="form-control input-text"
              id="taskName"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              placeholder="Enter task name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="startDate">Start Date and Time</label>
            <input
              type="datetime-local"
              className="form-control"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="endDate">End Date and Time</label>
            <input
              type="datetime-local"
              className="form-control"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div className="button-container">
            <button className="button-41" type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
      {tasks.length > 0 && (
        <div>
          <h2>Task List:</h2>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                <Name
                  taskName={task.taskName}
                  startDate={task.startDate}
                  endDate={task.endDate}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default App;
