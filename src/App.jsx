import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [todos, setTodos] = useState([
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
  ]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 pb-10 pt-10">
      <div className="w-full max-w-2xl px-4 py-8 mx-auto bg-white shadow-lg rounded-lg">
        <Header />
        <Input setTodos={setTodos} />
        <TaskList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
