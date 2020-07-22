import React,{ useState } from 'react';

import './styles.css'

import InputButton from '../../components/InputButton';
import photo from '../../assets/download.png';

export default function Dashboard(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [password2,setPassword2] = useState('');

    function handleEdit(e){
        e.preventDefault();

        console.log('working');
    }
    
    return (
        <div className="user-content" >
            <h2>/Dados Pessoais</h2>
            <div className="photo-edit" >
                <img src={photo} alt="edit-avatar" />
                { /*eslint-disable-next-line */}
                <a href='#' >alterar foto</a>
            </div>
            <form className='user-edit-input-container'>
            <input
                    className='input-text-edit'
                    type='text'
                    placeholder="Nome"
                    onChange={(e)=> setName(e.target.value)}
                    value={name}
                />
                <input
                     className='input-text-edit'
                     type='email'
                     placeholder="E-mail"
                     onChange={(e)=> setEmail(e.target.value)}
                     value={email}
                />
                <input
                     className='input-text-edit'
                     type='password'
                     placeholder="Senha"
                     onChange={(e)=> setPassword(e.target.value)}
                     value={password}
                />
                <input 
                     className='input-text-edit'
                     type='password'
                     placeholder="Confirmar Senha"
                     onChange={(e)=> setPassword2(e.target.value)}
                     value={password2}
                />
                <InputButton title="Editar" handleSubmit={handleEdit} />
            </form>
        </div>
    )
}