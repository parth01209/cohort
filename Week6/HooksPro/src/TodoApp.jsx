/* eslint-disable react/jsx-key */
import { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Learn React",
      description: "Learn React in 21 days",
    },
    {
      id: 2,
      title: "Go to Park ",
      description: "Go to Park, Touch some grass",
    },
    {
      id: 3,
      title: "Visit Zoo",
      description: "Search for Local Zoo",
    },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        title: Math.random(),
        description: Math.random(),
      },
    ]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add a Todo</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default TodoApp;

// Always include a key prop when rendering lists of elements in React
// to optimize rendering performance and avoid warnings.
// Whatever list u are re-rendering, make sure it has some kind of a unique identifier
