import React from "react";
import { Draggable } from "react-beautiful-dnd";


const TodoItem = ({item,index,alteraStatus}) =>{
    return(
        <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
        {(provided) => (
          <label {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
            <input
              type="checkbox"
              defaultChecked={item.done}
              onChange={(e) =>
                alteraStatus(item.id, e.target.checked)
              }
            />
            <span className={item.done ? "done" : ""}>
              {item.text}
            </span>
            <i className="fa fa-sort ms-2" aria-hidden="true"></i>
          </label>
        )}
      </Draggable>
    );
}

export default TodoItem;