import React from "react";
import "../styles/ToDoItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";

function ToDoItem(props) {
    const todos = props.todos;
    const listTodos = todos.map(todo => {
        
        return <div className="list" key={todo.key}>
             
            <p>
                <input type="text"
                    id={todo.key}
                    value={todo.text}
                    onChange={(e) => {
                        props.setUpdate(e.target.value,todo.key)
                    }}
                />
              <span>
                    <FontAwesomeIcon className="faicons" onClick={() => {
            props.deleteTodo(todo.key)
        }} icon="trash" />
              </span>
           </p>
        </div>
    })
    return (
        <div>
            <FlipMove duration={500} easing="ease-in-out">
               {listTodos} 
            </FlipMove>
        </div>
    )
}
export default ToDoItem;