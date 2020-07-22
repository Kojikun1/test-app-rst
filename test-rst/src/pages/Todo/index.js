import React, { useState } from 'react';

import './styles.css'
import TodoItem from '../../components/TodoItem';

export default function Todo(){
    const [todo,setTodo] = useState('');
    const [todos,setTodos] = useState([]);

    function handleTodos(e){
        e.preventDefault();
        
        if(todo){
            setTodos(prev => [...prev,{name: todo, 
                id: (Math.random() * 100).toFixed(6),
                completed: false
            }]);
        }else{
            alert("nenhum valor informado");
        }      
    } 
    function handleRemove(id){
         setTodos(prev => prev.filter(item => item.id !== id));
    }
    function handleCheck(id){
        console.log("is Executing");
        const todosUpdated = todos.map(item => {
            if(item.id === id){
                item.completed =  !item.completed
            }
            return item;
        })
        setTodos(todosUpdated);
    }
    const TodoItems = todos.map(item => <TodoItem
        key={item.id} 
        handleCheck={handleCheck} 
        handleRemove={handleRemove} 
        item={item} 
    />)
    return (
        <div className="todo-container" >
            <h2>/Todo list</h2>
            <h3>Lista de Tarefas</h3>
            <ul className='todo-list' >
               {TodoItems}
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