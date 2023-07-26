import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [items, setItem] = useState([]);
  const [editId, setEditId] = useState(0);
  //delete
  const deleteItem = (id) => {
    const newArray = items.filter((item) => item.id !== id);
    setItem(newArray);
    console.log("remove clicked");
  };
  //Edit
  const editForm = (id) => {
    console.log("edit clicked");
    const newArray = items.filter((item) => item.id !== id);
    items.map((item) => setInput(item.name.input));
    // setInput(newArray[0].name.input);
    setEditId(id);
  };
  // Submit Add OR Edit
  function addItem() {
    if (input === "") {
      alert("this feild is empty");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      name: { input },
    };
    setItem([...items, item]);
    setInput("");
    if (editId) {
      const EditingTodo = items.find((i) => i.id === editId);
     
      const updatedTodo = items.map((item) =>
        item.id === EditingTodo.id
          ? (item = { id: item.id, name: { input } })
          : { id: item.id, name: item.name }
      );
      setItem(updatedTodo);
      setEditId(0);
      setInput("");
      return;
    }
  }

  return (
    <div className="App">
      <h1>To Do App</h1>
      <input
        type="text"
        name="input"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button className="submit-button" type="" onClick={addItem}>
        {editId ? "Edit" : "Add"}
      </button>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <span> {item.name.input}</span>
              <div className='button-container'>
                <button className="remove" onClick={() => deleteItem(item.id)}>remove</button>
                <button className="edit " onClick={() => editForm(item.id)}>edit</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default App;
