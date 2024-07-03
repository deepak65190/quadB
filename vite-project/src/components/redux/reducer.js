import { ADD_Todo, EDIT_Todo, DELETE_Todo, TOGGLE_Todo } from "./action";

const intialTodo = {
  todo: JSON.parse(localStorage.getItem("todo")) || [],
};
const TodoReducer = (state = intialTodo, action) => {
  console.log(action, "add");
  switch (action.type) {
    case ADD_Todo: {
      const newTodo = [...state.todo, action.payload];

      localStorage.setItem("todo", JSON.stringify(newTodo));
      return { ...state, todo: newTodo };
    }
    case EDIT_Todo: {
      const newTodo = state.todo.map((el) =>
        el.id === action.payload.id
          ? { ...el, todo: action.payload.existTodo }
          : el
      );
      localStorage.setItem("todo", JSON.stringify(newTodo));

      return { ...state, todo: newTodo };
    }
    case TOGGLE_Todo: {
      const newTodo = state.todo.map((el) =>
        el.id == action.payload ? { ...el, isComplted: !el.isComplted } : el
      );
      localStorage.setItem("todo", JSON.stringify(newTodo));

      return { ...state, todo: newTodo };
    }
    case DELETE_Todo: {
      const newTodo = state.todo.filter((el) => el.id !== action.payload);
      localStorage.setItem("todo", JSON.stringify(newTodo));
      return { ...state, todo: newTodo };
    }
    default: {
      return state;
    }
  }
};
export default TodoReducer;
