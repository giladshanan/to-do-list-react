import React, { Component } from 'react';
import Now from './Now';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      completedAt: "created at " + this.props.created
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    if (this.state.complete === false) {
      this.refs.listp.style.setProperty("text-decoration", "line-through");
      this.setState({
        complete: true,
        completedAt: "completed at " + Now()
      });
    } else {
      this.refs.listp.style.setProperty("text-decoration", "none");
      this.setState({
        complete: false,
        completedAt: "created at " + this.props.created
      });
    }
  }

  render() {
    return (
      <li>
        <p ref='listp' >
          <input
            name="isDone"
            type="checkbox"
            onChange={this.handleInputChange}
           />
          {this.props.value}
        </p>
        {this.state.completedAt}
      </li>
    );
  }
}

export default ListItem;
