import React from "react";


const NewTodo = ({todoText, onType, addTodo}) =>{
    return(
        <div className="mb-3">
        <label className="form-label">
          Add todo
        </label>
        <div className="d-flex flex-row align-items-center">
          <input
            value={todoText}
            onChange={(e) => onType(e.target.value)}
            type="text"
            className="form-control"
            id="newTodo"
          />
          <button
            type="button"
            onClick={() => addTodo(todoText)}
            className="btn btn-primary"
          >
            +
          </button>
        </div>
      </div>
    );
}

export default NewTodo;