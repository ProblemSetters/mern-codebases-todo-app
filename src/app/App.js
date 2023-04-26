import { BrowserRouter, Route } from "react-router-dom";
import { ShowTodoList } from "./components/showTodoList";
import { CreateTodo } from "./components/createTodo";
import "./App.css";

function App() {
    return (
		<div className="app-contents">
			<BrowserRouter>
					<Route path="/" component={ShowTodoList} />
					<Route path="/create-todo" component={CreateTodo} />
				</BrowserRouter>
			</div>
    );
}

export default App;
