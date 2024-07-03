import { ADD_Todo, EDIT_Todo, DELETE_Todo, TOGGLE_Todo } from "./action";

const addTodo = (payload) => {
  return {
    type: ADD_Todo,
    payload,
  };
};
const editTodo = ({ id, existTodo }) => {
  return {
    type: EDIT_Todo,
    payload: { id, existTodo },
  };
};
const deleteTodo = (id) => {
  return {
    type: DELETE_Todo,
    payload: id,
  };
};
const toggleTodo = (id) => {
  return {
    type: TOGGLE_Todo,
    payload: id,
  };
};
export { addTodo, editTodo, deleteTodo, toggleTodo };
