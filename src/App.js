import React, { Component } from 'react';
import './App.css';

class ToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      listItems: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A to do list item was submitted: ' + this.state.value);
    event.preventDefault();
    var newItem = <li key={this.state.listItems.length}>{this.state.value}</li>
    this.setState({listItems: this.state.listItems.concat(newItem)});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Do this:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <ul>
          {this.state.listItems}
        </ul>
      </div>
    );
  }
}

function ToDoList(props) {
  return (
    <div>
      <h1>To Do List</h1>
      <ToDoForm />
    </div>
  );
}

export default ToDoList;
