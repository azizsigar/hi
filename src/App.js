import React, { useState } from 'react';
import './App.css';

function App() {
  // functions
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);

  function addItem() {
    if (!newItem) {
      return;
    }
    const newItemObject = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItems((oldItems) => [...oldItems, newItemObject]);
    setNewItem(""); // newItem'i temizleyin
  }
  function deleteItem(id){
    const newArray = items.filter(item => item.id !== id)
    setItems(newArray)

  }

  return (
    // htmls
    <div className="App">
      <h1>to do list</h1>

      <input
        type="text"
        placeholder="add to do"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItem}>➕</button>
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.value} <button onClick={()=>deleteItem(item.id)}>✔️</button></li>;
        })}
      </ul>
    </div>
  );
}

export default App;
