import React, { Component } from 'react';
import ToDoList from './ToDoList';
import Now from './Now';

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
    var newItemText = this.state.value;
    alert('A to do list item was submitted: ' + newItemText);
    event.preventDefault();

    this.setState({
      listItems: this.state.listItems.concat({[newItemText]: Now()})
    })
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
