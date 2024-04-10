import React from 'react';
import { connect } from 'react-redux';
import { updateTodoStatus, deleteTodo } from './Actions';

function TodoList({ todos, updateTodoStatus, deleteTodo }) {
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.status}
              onChange={() => updateTodoStatus(todo.id, !todo.status)}
            />
            <span>{todo.title}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps, { updateTodoStatus, deleteTodo })(TodoList);
