import React from 'react';
import './App.css'; 

const Todo = ({ todos, deleteHandler }) => {
    return (
        <div> 
            {todos.map((td, index) =>
                <div key={index} className="todo-item">
                    <h5>{td}</h5>
                    <button onClick={() => deleteHandler(index)}>Delete</button>
                </div>
            )}       
        </div>
    )
}

export default Todo;