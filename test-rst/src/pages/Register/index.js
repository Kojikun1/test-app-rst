import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'
import InputButton from '../../components/InputButton';

import backgroundImage from '../../assets/background.png'

export default function Register(){
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
                />
                <input
                     className='input-text'
                     type='text'
                     placeholder="E-mail"
                />
                <input
                     className='input-text'
                     type='text'
                     placeholder="Senha" 
                />
                <input 
                     className='input-text'
                     type='text'
                     placeholder="Confirmar Senha"
                />
                <InputButton title="CADASTRAR"  />
                <Link to='/login' >Eu já possuo Cadastro</Link>
            </form>
        </div>
        </div>
    )
}