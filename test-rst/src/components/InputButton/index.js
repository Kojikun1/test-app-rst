import React from 'react';

import './styles.css'

export default function InputButton({title, handleSubmit}){
    return (
        <button className="custom-button" type='submit' onClick={handleSubmit} >
            {title}
        </button>
    )
}