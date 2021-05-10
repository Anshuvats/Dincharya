import React from "react";
import "../styles/ToDoApp.css";
import ToDoItem from "./ToDoItem";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


library.add(faTrash);

export class ToDoApp extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            currentTodo: {
                text: '',
                key:''
            }
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
   }

onInputChange = (event) => {
    this.setState({
        currentTodo: {
            text: event.target.value,
            key: Date.now()
        }
    })
}
    
addTodo = (item) => {
        item.preventDefault();
        const newtodo = this.state.currentTodo;
        if (newtodo.text !== "") {
            const newtodos = [...this.state.todos, newtodo];
            this.setState({
                todos: newtodos,
                currentTodo: {
                    text: '',
                    key: ''
                }
            })
        }
    }

deleteTodo = (key) => {
    const filteredTodos = this.state.todos.filter(todo => todo.key !== key);
    this.setState({
        todos:filteredTodos
    })
}

    setUpdate(text, key) {
        const todos = this.state.todos;
        todos.map(todo => {
            if (todo.key === key) {
                todo.text = text;
            }
        })
        this.setState({
            todos:todos
        })
}

render() { 
        return (
           <div className="Input-Container">
                <header>
                    <form id="to-do-form" onSubmit={this.addTodo}>
                        <input type="text" placeholder="Enter Text" value={this.state.currentTodo.text}
                            onChange={this.onInputChange} />
                      <button type="submit">Add</button>
                    </form>
                </header>
                <ToDoItem todos={this.state.todos} deleteTodo={this.deleteTodo} setUpdate={this.setUpdate}></ToDoItem>
            </div>
        )
    }
}