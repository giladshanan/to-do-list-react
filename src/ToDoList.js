import React from 'react';
import ListItem from './ListItem';

const ToDoList = props => {

  const listItems = props.items.map(item => {
      var itemDescription = Object.keys(item)[0]
      return <ListItem
        key={itemDescription.slice(0, 6) + "- " + item[itemDescription]}
        value={itemDescription}
        created={item[itemDescription]}
      />
    });
  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default ToDoList;
