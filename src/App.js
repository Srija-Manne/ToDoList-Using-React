import React, { useState } from 'react';
import Todo from './Todo';
import './App.css'; 

function App() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    const changeHandler = (e) => {
        setTask(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (task.trim()) { 
            const newTodos = [...todos, task];
            setTask('');
            setTodos(newTodos);
        }
    }

    const deleteHandler = (index) => {
        const newTodos = todos.filter((todo, i) => i !== index);
        setTodos(newTodos);
    }

    return (
        <div className="container">
            <form onSubmit={submitHandler}>
                <input 
                    type="text" 
                    value={task} 
                    onChange={changeHandler} 
                />
                <button type="submit">Add</button>
            </form>
            <Todo todos={todos} deleteHandler={deleteHandler}/>
        </div>
    );
}

export default App;