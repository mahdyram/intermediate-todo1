import { useEffect, useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos
      ? JSON.parse(savedTodos)
      : [
          {
            id: 1,
            text: "Eating breakfast at 7:00",
            completed: false,
            showInput: false,
          },
          {
            id: 2,
            text: "Studying English part 2",
            completed: true,
            showInput: false,
          },
          {
            id: 3,
            text: "Watching movie for an hour",
            completed: false,
            showInput: false,
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-200 pb-10 pt-10">
      <div className="w-full max-w-2xl px-8 py-8 mx-auto bg-white shadow-lg rounded-lg">
        <Header />
        <Input setTodos={setTodos} />
        <TaskList todos={todos} setTodos={setTodos} />
        {!todos.length && (
          <p className="text-lg text-slate-600 mt-8 pt-5 border-t border-gray-400">
            Add a new Todo!
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
