import React from 'react';
import { Provider } from 'react-redux';
import { ChakraProvider } from "@chakra-ui/react";
import store from './components/store';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <div className="App">
          <h1>Todo App</h1>
          <AddTodo />
          <TodoList />
        </div>
      </ChakraProvider>
    </Provider>
  );
}

export default App;