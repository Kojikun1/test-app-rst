import React from 'react';

import './styles.css';

export default function TodoItem(props){
    const { handleRemove, handleCheck, item } = props;

   /* let style = {
        fontWeight: "bold",
        fontStyle: "italic"
    } */

    //let finalStyle = item.completed ? style : null;

    return(
        <li className='todo-item' >
           <label className='checkbox-container' >
           <p className='item-list-text' > {item.name}</p>
               <input
                    type='checkbox'
                    checked={item.completed}
                    onChange={()=> handleCheck(item.id)}
                />
                <span class="checkmark"></span>
           </label>
           <button
            className='remove-button' 
            onClick={() => handleRemove(item.id)}
          >
          remover
        </button>
     </li>
    )
} 