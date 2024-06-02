import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
export type TodoType = {
  id: number | string;
  title: string;
};

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoType[]>([
    { id: 1, title: "Finish the course" },
    { id: 2, title: "Master TypeScript" },
    { id: 3, title: "Master ReactJS" },
  ]);

  function handleAddTodo(todoItem: TodoType) {
    setTodos((prevTodo) => [...prevTodo, todoItem]);
  }

  function handleDeleteTodo(todoId: number | string) {
    setTodos((todos) => todos.filter((todo) => todo.id !== todoId));
  }

  return (
    <div>
      <NewTodo setTodos={setTodos} onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />;
    </div>
  );
};

export default App;
