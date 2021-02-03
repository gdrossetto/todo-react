import React, { useEffect, useState } from "react";
import "./App.scss";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import TodoItem from "./components/todo-item/todo-item";
import TodoList from "./components/todo-list/todo-list";
import NewTodo from "./components/new-todo.js/new-todo";

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

  function handleDrag(result) {
    if (!result.destination) return;

    let auxArray = Array.from(items);
    const [reorderedItem] = auxArray.splice(result.source.index, 1);
    auxArray.splice(result.destination.index, 0, reorderedItem);

    setItems(auxArray);
  }

  return (
    <div className="todo-bg">
      <div className="todo-container">
        <h1 className="mb-4">To-do List</h1>
        <NewTodo onType={setNewTodo} addTodo={addTodo} todoText={newTodo} />
        <DragDropContext onDragEnd={handleDrag}>
          <TodoList items={items} alteraStatus={alteraStatusTodo} />
        </DragDropContext>
      </div>
    </div>
  );
};

export default App;
