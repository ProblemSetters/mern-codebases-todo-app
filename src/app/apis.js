import axios from "axios";
import { generateBaseURL } from "./utils";
export const getTodos = async () => {
  const baseURL = generateBaseURL();
  let data = [];
  try {
    const todos = await axios.get(baseURL);
    data = [...todos.data];
  } catch (error) {
    console.log(error.message);
  }
  return data;
};

export const addTodo = async (data) => {
  const baseURL = generateBaseURL();
  let newTodos = [];
  axios
    .post(`${baseURL}`, data)
    .then((res) => {
      console.log(res.data);
      newTodos = [...res.data];
    })
    .catch((err) => {
      console.log("Error couldn't create TODO");
      console.log(err.message);
    });
  return newTodos;
};

export const updateTodo = async (_id, data) => {
  const baseURL = generateBaseURL();
  axios
    .put(`${baseURL}/${_id}`, data)
    .then((res) => {
      console.log(res.data.message);
    })
    .catch((err) => {
      console.log("Failed to update todo");
      console.log(err.message);
    });
};

export const deleteTodo = async (name) => {
  const baseURL = generateBaseURL();
  await axios.delete(`${baseURL}/${name}`);
};
