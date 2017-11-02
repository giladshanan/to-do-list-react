import React from 'react';
import ListItem from './ListItem';

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

export default ToDoList;
