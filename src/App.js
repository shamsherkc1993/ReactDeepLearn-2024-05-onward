import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 5271, name: "Record React Lectures", completed: true },
    { id: 7825, name: "Edit React Lectures", completed: false },
    { id: 8391, name: "Watch Lectures", completed: false },
  ]);

  const [show, setShow] = useState(true);

  function handleDelete(id) {
    setTasks(tasks.filter((newtask) => newtask.id !== id));
  }

  return (
    <div className="App">
      <h1>Task List</h1>
      <ul>
        <button className="toogle" onClick={() => setShow(!show)}>
          Toggle
        </button>
        {tasks &&
          tasks.map((task) => (
            <li
              key={task.id}
              className={task.completed ? "completed" : "incompleted"}
            >
              <span>
                {task.id} - {task.name}
              </span>
              <button onClick={() => handleDelete(task.id)} className="delete">
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
