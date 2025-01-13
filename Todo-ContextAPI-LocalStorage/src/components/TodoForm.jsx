import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";
import { PlusCircle } from 'lucide-react';

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (todo.trim()) {
      addTodo({ todo: todo.trim(), completed: false });
      setTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 focus-within:ring-2 focus-within:ring-purple-400">
        <input
          type="text"
          placeholder="Add a new todo..."
          className="flex-grow px-4 py-3 text-gray-700 bg-transparent outline-none"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-3 bg-purple-500 text-white transition-colors duration-300 hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
        >
          <PlusCircle className="w-6 h-6" />
        </button>
      </div>
    </form>
  );
};

export default TodoForm;


