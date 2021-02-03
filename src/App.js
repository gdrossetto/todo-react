import React, { useEffect, useState } from "react";
import "./App.scss";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

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

  function handleDrag(result){
    
    if(!result.destination)
      return;
    
    let auxArray = Array.from(items);
    const [reorderedItem] = auxArray.splice(result.source.index, 1);
    auxArray.splice(result.destination.index, 0 , reorderedItem)
    
    setItems(auxArray);
  }

  return (
    <div className="todo-bg">
      <div className="todo-container">
        <h2>To-do List</h2>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Add todo
          </label>
          <div className="d-flex flex-row align-items-center">
            <input
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              type="text"
              className="form-control"
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
        <DragDropContext onDragEnd={handleDrag}>
          <Droppable droppableId="todos">
            {(provided) => (
              <ol
                className="todo-list"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                    {(provided) => (
                      <label {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <input
                          type="checkbox"
                          defaultChecked={item.done}
                          onChange={(e) =>
                            alteraStatusTodo(item.id, e.target.checked)
                          }
                        />
                        <span className={item.done ? "done" : ""}>
                          {item.text}
                        </span>
                        <i className="fa fa-sort ms-2" aria-hidden="true"></i>
                      </label>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ol>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default App;
