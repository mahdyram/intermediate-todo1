export default function Task({ id, text, completed, setTodos }) {
  const handleCheck = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <label className="flex items-center cursor-default">
      <input
        type="checkbox"
        className="mr-2"
        checked={completed}
        onChange={() => handleCheck(id)}
      />
      <span className={`text-slate-800 ${completed && "line-through"}`}>
        {text}
      </span>
    </label>
  );
}
