export default function TodoRow({ todo } = {}) {
  const { id, todo: name } = todo || {};

  return (
    <div className="todo-row">
      <span>{name}</span>
    </div>
  );
}
