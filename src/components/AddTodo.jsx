import React, { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from './Actions';

function AddTodo({ addTodo }) {
  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (title.trim() === '') return;
    const newTodo = {
      id: uuidv4(),
      title,
      status: false
    };
    addTodo(newTodo);
    setTitle('');
  };

  return (
    <div>
      <h2>Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default connect(null, { addTodo })(AddTodo);