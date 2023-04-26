import { useState } from "react";
import { ShowTodoList } from "./components/showTodoList";
import { CreateTodo } from "./components/createTodo";
import "./App.css";
function App() {
  const [todo, setTodo] = useState([]);

  return (
    <div className="app-contents">
      <CreateTodo todo={todo} setTodo={setTodo} />
      <ShowTodoList todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
