import { useState } from "react";
import {v4 as uuidv4} from "uuid";

export default function TodoList(){

    let [todos, setTodos] = useState([{task: "sample-task", id: uuidv4(), doneTask:false}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () =>{
        setTodos((prevTodos)=>{
            return [...prevTodos, {task: newTodo, id: uuidv4(), doneTask: false}]
        });
        setNewTodo("")

    };

    let updateTodoValue = (event) =>{
        setNewTodo(event.target.value);

    };

    let deleteTodo = (id) =>{
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));

    };

    let markALlDOne = () =>{
        setTodos(
            todos.map((todo) =>{
                return {
                    ...todo, 
                    doneTask: true,
                }
            })
        )
    };

    let upperCaseOne = (id) =>{
              setTodos(
            todos.map((todo) =>{
                if(todo.id == id){
                      return {
                    ...todo, 
                    task: todo.task.toUpperCase(),
                }}
                else{
                    return todo;
                }     
            })
        )

    };

        let lowerCaseOne = (id) =>{
              setTodos(
            todos.map((todo) =>{
                if(todo.id == id){
                      return {
                    ...todo, 
                    task: todo.task.toLowerCase(),
                }}
                else{
                    return todo;
                }     
            })
        )
    };

    let doneOneTask = (id) => {
       setTodos((prevTodos) => 
    prevTodos.map((todo) =>
    todo.id === id ? {...todo, doneTask: true}: todo
)
);
    };

    return (
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}></input> 
            <button onClick={addNewTask}>Add Task</button>
            <br></br><br></br><hr></hr>
            <h4>Tasks Todo</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                    <span
              style={{
                textDecoration: todo.doneTask ? "line-through" : "none",
              }}
            >
              {todo.task}
            </span>
                    <button onClick={() => deleteTodo(todo.id)}>delete</button>&nbsp;
                    <button onClick={() => doneOneTask(todo.id)}>Done</button>&nbsp;
                    </li>
                ))}
            </ul>
            <button onClick={markALlDOne}>All Done</button>
        </div>
    )
}