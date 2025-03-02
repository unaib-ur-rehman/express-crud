import axios from "axios";

export const getTodos = async () => {
  try {
    const response = await axios.get("http://localhost:5000/todos");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch todos", error);
    throw error;
  }
};

export const deleteTodo = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:5000/todos/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to delete todo", error);
    throw error;
  }
};

export const updateTodo = async (todoId, updatedDescription) => {
  try {
    const response = await axios.put(`http://localhost:5000/todos/${todoId}`, {
      description: updatedDescription,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to update todo", error);
    throw error;
  }
};

export const addTodo = async (description) => {
    try {
      const response = await axios.post("http://localhost:5000/todos", {
        description,
      });
      return response.data;
    } catch (error) {
      console.error("Failed to add todo", error);
      throw error;
    }
  };