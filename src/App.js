import React, { Component } from 'react';
import './App.css';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    if (this.state.complete === false) {
      this.refs.listli.style.setProperty("text-decoration", "line-through");
      this.setState({
        complete: true
      });
    } else {
      this.refs.listli.style.setProperty("text-decoration", "none");
      this.setState({
        complete: false
      });
    }
  }

  render() {
    return (
      <li ref='listli' >
        <input
          name="isDone"
          type="checkbox"
          onChange={this.handleInputChange}
         />
        {this.props.value}
      </li>
    );
  }
}


const ToDoList = props => {
  const listItems = props.items.map(item =>
    <ListItem key={item.slice(0, 6) + "- " + (new Date()).getTime()}
              value={item} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

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
            Do this:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <ToDoList items={this.state.listItems} />
      </div>
    );
  }
}

function App(props) {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <ToDoForm />
    </div>
  );
}

export default App;
