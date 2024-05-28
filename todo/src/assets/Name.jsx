import React from "react";

function Name(props) {
  return (
    <center>
      <div className="task-details">
        <p>
          <strong>Task Name:</strong> {props.taskName}
        </p>
        <p>
          <strong>Start Date:</strong> {props.startDate}
        </p>
        <p>
          <strong>End Date:</strong> {props.endDate}
        </p>
      </div>
    </center>
  );
}

export default Name;
