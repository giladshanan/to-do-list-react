import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoList from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ToDoList />, document.getElementById('root'));
registerServiceWorker();
