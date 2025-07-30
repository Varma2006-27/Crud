import React, {useState} from 'react';
import ItemList from './itemList';
import AddItemForm from './AdditemForm';
function App() {
 const [items, setItems] = useState([]);


  const addItem = (name) => {
    const newItem = {
      id: items.length + 1,
      name,
    };
    setItems([...items, newItem]);
  };

  const updateItem = (id, newName) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, name: newName } : item
    );
    setItems(updatedItems);
  };

  const deleteItem = (id) => {
    const filteredItems = items.filter(item => item.id !== id);
    setItems(filteredItems);
  };

  return (
    <div>
      <h1>Simple CRUD</h1>
      <AddItemForm onAddItem={addItem} />
      <ItemList items={items} UpdateItem={updateItem} deleteItem={deleteItem} />
    </div>
  );
}
export default App;