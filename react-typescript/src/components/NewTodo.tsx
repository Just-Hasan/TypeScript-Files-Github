import React, { useRef } from "react";
import { TodoType } from "../App";
import { uid } from "uid/single";
import "../NewTodo.css";
interface NewTodoTypes {
  onAddTodo: (newTodo: TodoType) => void;

  // If we were accepting the setTodos set state as it is
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

const NewTodo: React.FC<NewTodoTypes> = ({ onAddTodo }) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const id = uid();
  function handleAddTodo(e: React.FormEvent) {
    e.preventDefault();
    const newText = textInputRef.current?.value;

    if (!newText) return;

    const newTodoItem: TodoType = {
      id: id,
      title: newText,
    };
    onAddTodo(newTodoItem);
  }

  return (
    <form onSubmit={handleAddTodo}>
      <div>
        <label htmlFor="todo-text">Todo text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};
export default NewTodo;
