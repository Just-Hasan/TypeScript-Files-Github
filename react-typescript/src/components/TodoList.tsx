import React from "react";
import { TodoType } from "../App";
import "../TodoList.css";
interface TodoListTypes {
  todos: TodoType[];
  onDeleteTodo: (todoId: number | string) => void;
}

const TodoList: React.FC<TodoListTypes> = ({ todos, onDeleteTodo }) => {
  console.log(todos);

  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id} onClick={() => onDeleteTodo(todo.id)}>
            <span>{todo.title}</span>
            <button>delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
