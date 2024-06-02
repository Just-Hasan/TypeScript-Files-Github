import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

const App: React.FC = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Finish the course" },
    { id: 2, title: "Master TypeScript" },
    { id: 3, title: "Master ReactJS" },
  ]);

  return (
    <div>
      <NewTodo />
      <TodoList todos={todos} />;
    </div>
  );
};

export default App;
