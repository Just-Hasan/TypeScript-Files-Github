import React from "react";

type todo = {
  id: number;
  title: string;
};

interface TodoListTypes {
  todos: todo[];
}

const TodoList: React.FC<TodoListTypes> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default TodoList;
