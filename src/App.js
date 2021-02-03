import React, { useState } from "react";
import "./App.scss";

const App = (props) => {
  const [items, setItems] = useState([
    { id: 1, text: "Learn JavaScript", done: false },
    { id: 2, text: "Learn React", done: false },
    { id: 3, text: "Play around in JSFiddle", done: false },
    { id: 4, text: "Build something awesome", done: false },
  ]);

  const [newTodo, setNewTodo] = useState("");

  function alteraStatusTodo(id, checked) {
    let auxArray = items.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          done: checked,
        };
        return updatedItem;
      }
      return item;
    });
    setItems(auxArray);
  }

  function addTodo(text) {
    if (text && text != "") {
      let auxArray = items.concat({
        id: items.length + 1,
        text: text,
        done: false,
      });

      setItems(auxArray);
      setNewTodo("");
    }
  }

  return (
    <div className="todo-bg">
      <div className="todo-container">
        <h2>Todos:</h2>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Add todo
          </label>
          <div className="d-flex flex-row align-items-center">
            <input
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              type="text"
              class="form-control"
              id="newTodo"
            />
            <button
              type="button"
              onClick={() => addTodo(newTodo)}
              className="btn btn-primary"
            >
              +
            </button>
          </div>
        </div>
        <ol className="todo-list">
          {items.map((item, index) => (
            <label key={item.id}>
              <input
                type="checkbox"
                defaultChecked={item.done}
                onChange={(e) => alteraStatusTodo(item.id, e.target.checked)}
              />
              <span className={item.done ? "done" : ""}>{item.text}</span>
            </label>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default App;
