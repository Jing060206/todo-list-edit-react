import React, { useState } from "react";

const EditTodoForm = ({ task, editTodo }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    // edit todo
    editTodo(value, task.id);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="update a task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default EditTodoForm;
