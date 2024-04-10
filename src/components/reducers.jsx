import { ADD_TODO, UPDATE_TODO_STATUS, DELETE_TODO } from './Actions';

const initialState = {
  todos: []
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case UPDATE_TODO_STATUS:
      return {
        ...state,
        todos: state.todos.map(todo => 
          todo.id === action.payload.id ? { ...todo, status: action.payload.status } : todo
        )
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
}

export default rootReducer;
