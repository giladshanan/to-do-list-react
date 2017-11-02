import React from 'react';
import './App.css';
import ToDoForm from './ToDoForm';

function App(props) {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <ToDoForm />
    </div>
  );
}

export default App;
