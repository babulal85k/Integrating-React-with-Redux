export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO_STATUS = 'UPDATE_TODO_STATUS';
export const DELETE_TODO = 'DELETE_TODO';

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo
  };
}

export function updateTodoStatus(id, status) {
  return {
    type: UPDATE_TODO_STATUS,
    payload: { id, status }
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: id
  };
}