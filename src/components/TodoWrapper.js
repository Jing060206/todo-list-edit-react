import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import EditTodoForm from "./EditTodoForm";
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTask = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const handleDelete = (id) => {
    const deletedTask = [...todos].filter((item) => item.id !== id);
    setTodos(deletedTask);
  };

  const toggleCompleted = (id) => {
    const toggle = [...todos].map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodos(toggle);
  };

  const handleEdit = (id) => {
    const edit = [...todos].map((item) =>
      item.id === id ? { ...item, isEditing: true } : item
    );
    setTodos(edit);
  };

  const editTodo = (task, id) => {
    const editTodos = [...todos].map((item) =>
      item.id === id ? { ...item, task, isEditing: false } : item
    );
    setTodos(editTodos);
  };

  return (
    <div>
      <p>todo List</p>
      <TodoForm addTask={addTask} />
      {todos?.map((item) =>
        item.isEditing ? (
          <EditTodoForm key={item.id} task={item} editTodo={editTodo} />
        ) : (
          <Todo
            key={item.id}
            task={item}
            handleDelete={handleDelete}
            toggleCompleted={toggleCompleted}
            handleEdit={handleEdit}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
