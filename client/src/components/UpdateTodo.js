import { getTodos, updateTodo } from "@components/api/todos";
import React, { useState } from "react";


const UpdateTodo = ({ todo, onUpdate, onCancel }) => {
  const [updatedTodo, setUpdatedTodo] = useState(todo.description);

  const handleUpdate = async () => {
    try {
      await updateTodo(todo.todo_id, updatedTodo);
      onUpdate({ ...todo, description: updatedTodo });
      getTodos();
      onCancel();
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-8 rounded-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Update Todo</h2>
        <input
          type="text"
          value={updatedTodo}
          onChange={(e) => setUpdatedTodo(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <div className="flex justify-end">
          <button
            onClick={handleUpdate}
            className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
          >
            Update
          </button>
          <button
            onClick={handleCancel}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateTodo;
