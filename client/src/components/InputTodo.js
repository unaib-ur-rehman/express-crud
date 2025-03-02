"use client";
import React, { useState } from "react";
import { addTodo } from "../api/todos";

const InputTodo = ({ onAddTodo }) => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const newTodo = await addTodo(description);
      onAddTodo(newTodo);
      setDescription(""); // Clear the input field
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <h1 className="text-3xl text-center mb-4 font-bold text-gray-800 ">
        Add Todo
      </h1>
      <form onSubmit={onSubmitForm}>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Add Todo"
          className="py-2 px-6 rounded border border-gray-400"
          required
        />
        <button
          className="ml-2 py-2 px-4 bg-blue-500 text-white rounded"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default InputTodo;