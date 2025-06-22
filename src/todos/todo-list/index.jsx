import { useGetAllTodosQuery } from "../../store2/apiSlice";

import TodoRow from "../todo-item";

export default function TodoList() {
  const { data, isLoading, error } = useGetAllTodosQuery();

  console.log({ data });
  console.log({ isLoading });
  console.log({ error });

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
    <div>
      {data?.map((todo) => {
        return <TodoRow key={todo?.id} todo={todo} />;
      })}
    </div>
  );
}
