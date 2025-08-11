import { useState } from "react";
import Task from "./Task";
import ChangeTaskInput from "./ChangeTaskInput";
import ChangeTaskBtn from "./ChangeTaskBtn";
import DeleteTaskBtn from "./DeleteTaskBtn";

export default function TaskList({ todos, setTodos }) {
  const [editTasks, setEditTasks] = useState({});

  return (
    <div>
      <ul className="list-reset">
        {todos.map(({ id, text, completed, showInput }) => (
          <li
            className="relative flex items-center justify-between px-2 py-6 border-b"
            key={id}
          >
            {showInput ? (
              <ChangeTaskInput
                id={id}
                editTasks={editTasks}
                setEditTasks={setEditTasks}
                todos={todos}
                setTodos={setTodos}
              />
            ) : (
              <Task
                id={id}
                text={text}
                completed={completed}
                setTodos={setTodos}
              />
            )}

            <button
              type="button"
              className="absolute right-0 flex items-center space-x-1"
            >
              <ChangeTaskBtn
                id={id}
                setEditTasks={setEditTasks}
                todos={todos}
                setTodos={setTodos}
              />
              <DeleteTaskBtn setTodos={setTodos} id={id} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
