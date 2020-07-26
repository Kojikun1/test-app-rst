import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css'
import InputButton from '../../components/InputButton';

import backgroundImage from '../../assets/background.png'

export default function Register(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [password2,setPassword2] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();
        if(password === password2){
            try {
                const response = await api.post('/user/register',{
                    name,
                    email,
                    password
                });
    
                alert(`${response.data.message}`);
                
                history.push('/login');
    
                console.log(name, email, password, password2);
                
                console.log(response);
    
            }catch(error) {
                if(error.response){
                    alert(`${error.response.data.message}`);
                    console.log(error.response);
                }
            }
        }else{
            alert("Password dont match");
        }     
    }

    return (
        <div className='main' >
            <img src={backgroundImage} alt="background" className="background-image" />
         <div className='side-content' >
            <form action="" className='form' >
                <h2>Faça seu Cadastro</h2>
                <input
                    className='input-text'
                    type='text'
                    placeholder="Nome"
                    onChange={(e)=> setName(e.target.value)}
                    value={name}
                />
                <input
                     className='input-text'
                     type='email'
                     placeholder="E-mail"
                     onChange={(e)=> setEmail(e.target.value)}
                     value={email}
                />
                <input
                     className='input-text'
                     type='password'
                     placeholder="Senha"
                     onChange={(e)=> setPassword(e.target.value)}
                     value={password}
                />
                <input 
                     className='input-text'
                     type='password'
                     placeholder="Confirmar Senha"
                     onChange={(e)=> setPassword2(e.target.value)}
                     value={password2}
                />
                <InputButton title="CADASTRAR" handleSubmit={handleRegister} />
                <Link to='/login' >Eu já possuo Cadastro</Link>
            </form>
        </div>
        </div>
    )
}