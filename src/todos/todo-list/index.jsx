import { useState } from "react";
import { useAddTodoMutation, useGetAllTodosQuery } from "../../store2/apiSlice";

import TodoRow from "../todo-item";

export default function TodoList() {
  const { data, isLoading, error, refetch } = useGetAllTodosQuery();
  const [enteredTodo, setEnteredTodo] = useState("");

  const [addTodo, addTodoResponse] = useAddTodoMutation();

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
  if (addTodoResponse?.isLoading) {
    return (
      <div>
        <h1>Data is Loading</h1>
      </div>
    );
  }

  const handleInputChange = (event) => {
    setEnteredTodo(event?.target?.value);
  };

  if (error) {
    return (
      <div>
        <h1>Error Occured</h1>
      </div>
    );
  }

  const handleAddTodo = () => {
    // this is not what rtk suggest

    // addTodo({
    //   completed: false,
    //   userId: 123,
    //   todo: enteredTodo,
    // }).then(() => {
    //   refetch();
    // });

    // better way is : >>>>> unwrap
    // addTodo({
    //   completed: false,
    //   userId: 123,
    //   todo: enteredTodo,
    // })
    //   .unwrap()
    //   .then(() => {
    //     refetch();
    //   });

    // but the best way is : put tagsTypes on apiSlice's reducerPath

    addTodo({
      completed: false,
      userId: 123,
      todo: enteredTodo,
    });
  };

  return (
    <div>
      <div>
        <input onChange={handleInputChange} value={enteredTodo} type="text" />
        <button onClick={handleAddTodo}>Add todo</button>
      </div>
      {data?.map((todo) => {
        return <TodoRow key={todo?.id} todo={todo} />;
      })}
    </div>
  );
}
