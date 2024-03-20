import React, { useState } from 'react';

function ListComponent() {
  // State to hold the list items
  const [items, setItems] = useState([]);

  // Function to add an item to the list
  const addItem = () => {
    // Here you can add the logic to get the new item from user input
    const newItem = prompt('Enter new item:');
    if (newItem) {
      setItems([...items, newItem]);
    }
  };

  return (
    <div>
      <h2>List Example</h2>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {/* Render each item in the list */}
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListComponent;
