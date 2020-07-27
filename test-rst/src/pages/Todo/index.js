import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import './styles.css'
import TodoItem from '../../components/TodoItem';

export default function Todo(){
    const [todo,setTodo] = useState('');
    const [todos,setTodos] = useState([]);

    useEffect(() => {
         async function loadTodos(){
            try {
                const response = await api.get('/todos');
   
                console.log(response.data);
                setTodos(response.data);
            } catch (error) {
                if(error.response){
                    console.log(error.response.data);
                    alert(`${error.response.data.message}`);
                }
                alert('Network error');
            }
         }
         loadTodos()
    },[]);

    async function handleTodos(e){
        e.preventDefault();
        
        if(todo){
            try{
                
                const response = await api.post('/todos', { content: todo});

                setTodos(prev => [...prev,response.data.todo]);
                    
            }catch(error){
                console.log(error);
            }
        }else{
            alert("nenhum valor informado");
        }      
    } 
    async function handleRemove(id){
         try {
             const response = await api.delete(`/todos/${id}`)

             console.log(response.data);

             alert(`${response.data.message}`);

             setTodos(prev => prev.filter(item => item._id !== id));

         } catch (error) {
             if(error.response){
                 console.log(error.response.data);
             }else{
                 console.log("Network error");
             }
         }
         
    }
    async function handleCheck(id){
        console.log("is Executing");
         try {
             let valueChecked = false;

             const todosUpdated = todos.map(item => {
                if(item._id === id){
                    valueChecked = !item.completed;
                    item.completed =  !item.completed
                }
                return item;
            })
            setTodos(todosUpdated);

            const response = await api.put(`/todos/${id}`, {completed: valueChecked });

            console.log(response.data);
         } catch (error) {
             console.log(error);
         }
    }
    const TodoItems = todos.map(item => <TodoItem
        key={item._id} 
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