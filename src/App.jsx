import React from "react";

import "./App.css";
import TodoList from "./todos/todo-list";

function App() {
  return (
    <>
      <div className="todo-card">
        <TodoList />
      </div>
    </>
  );
}

export default App;
