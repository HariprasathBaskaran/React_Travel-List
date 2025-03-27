import { useState } from "react";
import { Logo } from "./Components/Logo";
import { Form } from "./Components/Form";
import { PackingList } from "./Components/PackingList";
import { Stats } from "./Components/Stats";

function App() {
  const [items, setitems] = useState([]);

  function handleAddItems(item) {
    setitems((items) => [...items, item]);
  }

  function handleDeleteitem(id) {
    setitems((items) => items.filter((item) => item.id !== id));
  }

  function handlePackedItem(id) {
    console.log(id);
    setitems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItem() {
    const confirmed = window.confirm("ARe you sure wnat to delete all items?");
    confirmed && setitems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteitem}
        onPackedItem={handlePackedItem}
        onClearItem={handleClearItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
