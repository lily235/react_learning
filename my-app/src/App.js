import { useState } from 'react';

export default function ToDoList() {
  const [itemText, setItemText] = useState("");
  const [todoItems, setToDoItems] = useState([]);

  function handleAddItem(newItem) {
    if (!newItem) {
      return;
    }
    const nextTodoItems = [...todoItems.slice(), newItem];
    setToDoItems(nextTodoItems);
    setItemText("");
  }

  function onItemTextChange(newItem) {
    setItemText(newItem);
  }
  const items = [];
  todoItems.forEach((oneitem, i) => {
    items.push(<li key={i}>{oneitem}</li>);
  });

  return (
    <div className="todolist">
      <div className="addtodo">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddItem(itemText);
          }}
        >
          <input
            type="text"
            value={itemText}
            placeholder="add todo..."
            onChange={(e) => onItemTextChange(e.target.value)}
          />
          <input type="submit" value="ADD" />
        </form>
      </div>
      <div className="todoitems">
        <ol>{items}</ol>
      </div>
    </div>
  );
}
