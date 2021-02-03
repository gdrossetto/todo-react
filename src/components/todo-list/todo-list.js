import React, { useEffect, useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import TodoItem from "../todo-item/todo-item";

const TodoList = ({ items, alteraStatus }) => {
  return (
    <Droppable droppableId="todos">
      {(provided) => (
        <ol
          className="todo-list"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {items.map((item, index) => (
            <TodoItem
              key={item.id}
              item={item}
              index={index}
              alteraStatus={alteraStatus}
            />
          ))}
          {provided.placeholder}
        </ol>
      )}
    </Droppable>
  );
};

export default TodoList;
