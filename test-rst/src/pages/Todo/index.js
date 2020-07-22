import React, { useState } from 'react';

import './styles.css'

export default function Todo(){
    const [todo,setTodo] = useState('');
    const [todos,setTodos] = useState([]);

    function handleTodos(e){
        e.preventDefault();

        if(todo){
            setTodos(prev => [...prev,todo]);
        }else{
            alert("nenhum valor informado");
        }      
    }  
    return (
        <div className="todo-container" >
            <h2>/Todo list</h2>
            <h3>Lista de Tarefas</h3>
            <ul className='todo-list' >
            {todos.map(item => (
                <li>{item}</li>
            ))}
            </ul>
            <div className="input-todo-box">
                <input 
                    className='input-todo'
                    type='text'
                    onChange={(e)=> setTodo(e.target.value)}
                    value={todo}
                />
                <button type='submit' className="todo-button" onClick={handleTodos} >Salvar</button>
            </div>
        </div>
    )
}