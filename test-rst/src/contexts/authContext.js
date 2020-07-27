import React, { createContext, useState, useEffect, useContext } from 'react';

//import AuthService from '../services/auth'
import api from '../services/api';

const AuthContext = createContext({});


export function AuthProvider({ children }){
    
    const [user,setUser] = useState(null);

    useEffect(()=> {
        function LoadContent(){
           const user = JSON.parse(localStorage.getItem("App:User"));
           const token = JSON.parse(localStorage.getItem("App:token"));
           
           if(user && token){
               setUser(user);

               api.defaults.headers.authorization = `Bearer ${token}`;
           }
        }
        LoadContent();
    },[]);

    async function SignIn(email, password){
        try{
            const response = await api.post('/user/session',{
                email,
                password
            });
             
            setUser(response.data.user);

            api.defaults.headers.authorization = `Bearer ${response.data.token}`;

            localStorage.setItem("App:User",JSON.stringify(response.data.user));
            localStorage.setItem("App:Token",JSON.stringify(response.data.token));

        }catch(error){
            if(error.response){
                console.log(error.response.status, error.response.data);
                alert(`failure to login ${error.response.data.message}`);
            }else{
                alert("network error");
            }
        }
    }

    function SignOut(){
        setUser(null);
        localStorage.clear();
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, SignIn, SignOut}} >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext);
}




