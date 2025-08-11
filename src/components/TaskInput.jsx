import { useState } from "react";

export default function TaskInput({ setTodos }) {
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What needs to be done today?"
          className="w-full px-3 py-3 border border-gray-600 rounded outline-none"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </form>
    </div>
  );
}
