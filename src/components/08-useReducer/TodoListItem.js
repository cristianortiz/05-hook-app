const TodoListItem = ({ todo, i, handleDelete, handleToggle }) => {
  return (
    <li key={todo.id} className="list-group-item">
      <p
        onClick={() => handleToggle(todo.id)}
        className={`${todo.done && "complete"}`}
      >
        {i + 1}. {todo.desc}
      </p>
      <button onClick={() => handleDelete(todo.id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
};

export default TodoListItem;
