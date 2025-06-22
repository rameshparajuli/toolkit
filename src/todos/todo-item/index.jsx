import { useEffect } from "react";
import { useLazyGetTodoQuery } from "../../store2/apiSlice";
import { useDeleteTodoMutation } from "../../store2/deleteApiSlice";

export default function TodoRow({ todo } = {}) {
  const { id, todo: name } = todo || {};

  const [trigger, result] = useLazyGetTodoQuery();

  const [deleteTodoFn, deleteResult] = useDeleteTodoMutation();

  const handleGetStatus = () => {
    trigger(id);
  };

  function getStatus(isCompleted) {
    let status = "Completed";

    if (!isCompleted) {
      status = "pending...";
    }

    return status;
  }

  useEffect(() => {
    if (deleteResult?.isSuccess) {
      alert("Todo Deleted");
    }
  }, [deleteResult?.isSuccess]);

  const handleDelete = () => {
    deleteTodoFn(id);
  };
  return (
    <div className="todo-row">
      <span>{name}</span>
      <button onClick={handleDelete}>delete</button>
      <button onClick={handleGetStatus}>get status</button>
      {result?.isLoading && <span>Loading status</span>}
      {result?.data?.id && getStatus(result?.data?.completed)}
      {result.isError && <span>{result?.error?.data?.message}</span>}
    </div>
  );
}
