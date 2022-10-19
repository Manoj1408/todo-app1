import {
  ADD_DATA,
  CLEAR_COMPLETED,
  COMPLETE_ALL,
  DELETE_DUPLICATES,
  DELETE_TODO,
  TODO_CLICKED,
  TOGGLE_STATUS,
} from "./action";

const initState = {
  todos: [],
  clicked: false,
};
export const todoReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case ADD_DATA:
      return { ...store, todos: [...store.todos, payload] };
    case TOGGLE_STATUS: {
      const result = store.todos?.map((todo) => {
        if (todo.id == payload.id && payload.query == "toggle") {
          todo.status = !todo.status;
          return todo;
        } else if (todo.id == payload.id && payload.query == "change") {
          todo.inputData = payload.updatedData;
          return todo;
        } else {
          return todo;
        }
      });
      return { ...store, todos: [...result] };
    }
    case DELETE_TODO: {
      //console.log({payload})
      let result = store.todos.filter((todo) => {
        if (todo.id !== payload) {
          return todo;
        }
      });
      // console.log(result)
      return { ...store, todos: [...result] };
    }
    case COMPLETE_ALL: {
      const result = store.todos?.map((todo) => {
        if (true) {
          todo.status = true;
          return todo;
        }
      });
      return { ...store, todos: [...result] };
    }

    case CLEAR_COMPLETED: {
      const result = store.todos.filter((todo) => {
        if (todo.status !== true) {
          return todo;
        }
      });
      return { ...store, todos: [...result] };
    }

    case DELETE_DUPLICATES: {
      const result = store.todos.filter((todo) => {
        if (todo.inputData !== payload) {
          return todo;
        }
      });
      return { ...store, todos: [...result] };
    }

    case TODO_CLICKED: {
      //console.log("rEducer",payload?"true":"false")
      return { ...store, clicked: payload };
    }

    default:
      return store;
  }
};
