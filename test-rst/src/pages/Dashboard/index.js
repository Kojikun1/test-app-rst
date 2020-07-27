import React,{ useState } from 'react';

import './styles.css'

import api from '../../services/api';

import InputButton from '../../components/InputButton';
import photo from '../../assets/download.png';

export default function Dashboard(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [password2,setPassword2] = useState('');
    const [avatarImage,setAvatarImage] = useState(null);
    const [avatarDisplay,setAvatarDisplay] = useState(null);

    async function handleEdit(e){
        e.preventDefault();

            console.log(avatarImage)
            console.log(avatarDisplay);
        
        try {
            if(avatarImage){
                const formData = new FormData();

                formData.append('file',avatarImage,avatarImage.name);

                const response = await api.post('/posts', formData);

                console.log(response);
            }
            
        } catch (error) {
            if(error.response){
                console.log(error.response.data)
                alert(`${error.response.data.message}`);
            }else{
                alert("Network Error");
            }
        }
        
    }

    function handleSelecthandler(e){
           e.preventDefault();
           setAvatarImage(e.target.files[0])
           setAvatarDisplay(URL.createObjectURL(e.target.files[0]));
    }
    
    return (
        <div className="user-content" >
            <h2>/Dados Pessoais</h2>
            <div className="photo-edit" >
                <img src={avatarDisplay ? avatarDisplay : photo} alt="edit-avatar" />
                { /*eslint-disable-next-line */}
                <label htmlFor='input-image'>alterar foto</label>
                <input id='input-image' type='file' onChange={handleSelecthandler}  />
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