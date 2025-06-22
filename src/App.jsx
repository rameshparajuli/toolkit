import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import TodoList from "./todos/todo-list";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("Default Error");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://dummyjson.com/todos")
      .then((response) => {
        setData(response?.data?.todos);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setError();
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Data is Loading</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Error Occured</h1>
      </div>
    );
  }

  return (
    <>
      <div className="todo-card">
        <TodoList todos={data} />
      </div>
    </>
  );
}

export default App;
