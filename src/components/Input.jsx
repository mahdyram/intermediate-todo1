import { useState } from "react";

export default function Input({ setTodos }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim())
      setTodos((prev) => [
        ...prev,
        {
          id: prev.length > 0 ? prev.at(-1).id + 1 : 1,
          text: task,
          completed: false,
          showInput: false,
        },
      ]);
    setTask("");
  };
  return (
    <div className="relative mb-4">
      <form onSubmit={handleSubmit} className="flex justify-between">
        <input
          type="text"
          placeholder="What needs to be done today?"
          className="w-118 px-3 py-3 border border-slate-500 rounded outline-none"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 w-30 text-lg rounded-sm text-white cursor-pointer transition-colors duration-300 ease-in-out hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Add
        </button>
      </form>
    </div>
  );
}
