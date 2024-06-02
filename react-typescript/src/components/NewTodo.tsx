import React, { useRef } from "react";

const NewTodo: React.FC = () => {
  const textInputRef = useRef<HTMLInputElement>(null);
  return (
    <form>
      <div>
        <label htmlFor="todo-text">Todo text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};
export default NewTodo;
