import React, { Component } from 'react';

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

export default ListItem;
