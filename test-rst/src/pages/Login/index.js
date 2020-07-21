import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './styles.css'
import InputButton from '../../components/InputButton';
import backgroundImage from '../../assets/background.png'

import AuthContext from '../../contexts/authContext';

export default function Login(){

    const { signed, user, SignIn } = useContext(AuthContext);

    console.log(signed, user);

    function handleSignIn(e){
        e.preventDefault();

        SignIn();

        console.log(signed);

        console.log(user);
    }

    return (
        <div className='main' >
        <img src={backgroundImage} alt="background" className="background-image" />
        <div className='side-content' >
            <form  className='form' >
                <h2 >Faça seu login</h2>
                <input
                   className='input-text'
                   type='text'
                   placeholder="E-mail"
                />
                <input
                    className='input-text'
                    type='text'
                    placeholder="Password"
                />
                <InputButton title="ENTRAR" handleSubmit={handleSignIn} />
                <Link to='/' >Não possuo cadastro</Link>
            </form>
        </div>
        </div>
    )
}