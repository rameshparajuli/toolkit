import { useGetAllTodosQuery } from "../../store2/apiSlice";

import TodoRow from "../todo-item";

export default function TodoList({ todos }) {
  const { data, isLoading, error } = useGetAllTodosQuery();

  console.log({ data });
  console.log({ isLoading });
  console.log({ error });

  return (
    <div>
      {todos.map((todo) => {
        return <TodoRow key={todo?.id} todo={todo} />;
      })}
    </div>
  );
}
