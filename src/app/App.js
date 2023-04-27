import { ShowTodoList } from "./components/showTodoList";
import { CreateTodo } from "./components/createTodo";
import "./App.css";
function App() {
  return (
    <div className="app-contents">
      <CreateTodo/>
      <ShowTodoList/>
    </div>
  );
}

export default App;
