import { useState } from 'react';

export default function ToDoList() {
  const [itemText, setItemText] = useState("");
  const [todoItems, setToDoItems] = useState([]);

  function handleAddItem(newItem) {
    const nextTodoItems = [...todoItems.slice(), newItem];
    setToDoItems(nextTodoItems);
  }

  const items = todoItems.map((oneitem, i) => {
    return <li key={i}>{oneitem}</li>;
  });

  return (
    <div className="todolist">
      <div className="addtodo">
        <AddItemBar
          itemText={itemText}
          onItemTextChange={setItemText}
          onAdd={handleAddItem}
        />
      </div>
      <div className="todoitems">
        <ol>{items}</ol>
      </div>
    </div>
  );
}

function AddItemBar({ itemText, onItemTextChange, onAdd }) {
  return (
    <form>
      <input
        type="text"
        value={itemText}
        placeholder="add todo..."
        onChange={(e) => onItemTextChange(e.target.value)}
      />
      <button onClick={() => onAdd(itemText)}>ADD</button>
    </form>
  );
}
