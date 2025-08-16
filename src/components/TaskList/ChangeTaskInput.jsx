import { useEffect, useRef } from "react";

export default function ChangeTaskInput({
  id,
  editTasks,
  setEditTasks,
  todos,
  setTodos,
}) {
  const inputRef = useRef({});

  useEffect(() => {
    todos.forEach(({ id, showInput }) => {
      if (showInput && inputRef.current[id]) {
        inputRef.current[id].focus();
      }
    });
  }, [todos]);

  const handleChangeTxt = (e, id) => {
    e.preventDefault();
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id == id
          ? { ...todo, text: editTasks[id], showInput: !todo.showInput }
          : todo
      )
    );
  };

  return (
    <form onSubmit={(e) => handleChangeTxt(e, id)}>
      <input
        type="text"
        placeholder=" change task ..."
        className={"px-3 py-2.5 w-70 rounded outline-none bg-slate-300"}
        ref={(el) => (inputRef.current[id] = el)}
        value={editTasks[id] || ""}
        onChange={(e) =>
          setEditTasks((prev) => ({ ...prev, [id]: e.target.value }))
        }
      />
    </form>
  );
}
