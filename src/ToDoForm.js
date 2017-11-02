import React, { Component } from 'react';
import ToDoList from './ToDoList';

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
    this.setState({listItems: this.state.listItems.concat(this.state.value)});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" placeholder="Explore React..." value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <ToDoList items={this.state.listItems} />
      </div>
    );
  }
}

export default ToDoForm;
