import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ task, handleDelete, toggleCompleted, handleEdit }) => {
  return (
    <div className="Todo">
      <p
        className={`${task.completed ? "completed" : ""}`}
        onClick={() => toggleCompleted(task.id)}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => handleEdit(task.id)}
        />
        <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(task.id)} />
      </div>
    </div>
  );
};

export default Todo;
