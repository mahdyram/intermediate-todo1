import { useEffect, useRef, useState } from "react";

export default function TaskList({ todos, setTodos }) {
  const [editTasks, setEditTasks] = useState({});

  const inputRef = useRef({});

  useEffect(() => {
    todos.forEach(({ id, showInput }) => {
      if (showInput && inputRef.current[id]) {
        inputRef.current[id].focus();
      }
    });
  }, [todos]);

  const handleCheck = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleChangeBtn = (id) => {
    const currentTask = todos.find((todo) => todo.id === id);
    setEditTasks((prev) => ({ ...prev, [id]: currentTask.text }));

    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, showInput: !todo.showInput } : todo
      )
    );
  };

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

  const handleDelete = (id) => {
    console.log(id);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <ul className="list-reset">
        {todos.map(({ id, text, completed, showInput }) => (
          <li
            className="relative flex items-center justify-between px-2 py-6 border-b"
            key={id}
          >
            <label className="flex items-center cursor-default">
              <input
                type="checkbox"
                className="mr-2"
                checked={completed}
                onChange={() => handleCheck(id)}
              />
              <span className={`text-gray-600 ${completed && "line-through"}`}>
                {text}
              </span>
            </label>

            {showInput && (
              <form onSubmit={(e) => handleChangeTxt(e, id)}>
                <input
                  type="text"
                  ref={(el) => (inputRef.current[id] = el)}
                  placeholder=" change task ..."
                  className={
                    "px-3 py-3 w-60 rounded outline-none bg-pink-200 mr-20"
                  }
                  value={editTasks[id] || ""}
                  onChange={(e) =>
                    setEditTasks((prev) => ({ ...prev, [id]: e.target.value }))
                  }
                />
              </form>
            )}

            <button
              type="button"
              className="absolute right-0 flex items-center space-x-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-blue-600 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                onClick={() => handleChangeBtn(id)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-red-700 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                onClick={() => handleDelete(id)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
