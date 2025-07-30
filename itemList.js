import React from 'react';

function itemList({ items, updateItem, deleteItem }) {
  const handleEdit = (id) => {
    const newName = prompt('Enter new name');
    if (newName !== null && newName.trim() !== '') {
      updateItem(id, newName);
    }
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name}
          <button onClick={() => handleEdit(item.id)}>Edit</button>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default itemList;
