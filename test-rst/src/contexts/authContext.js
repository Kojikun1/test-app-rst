import React, { createContext, useState, useEffect, useContext } from 'react';

import AuthService from '../services/auth'

const AuthContext = createContext({});

export function AuthProvider({ children }){
    
    const [user,setUser] = useState(null);

    useEffect(()=> {
        function LoadContent(){
           const user = JSON.parse(localStorage.getItem("App:User"));
           
           if(user){
               setUser(user);
           }
        }
        LoadContent();
    },[]);

    async function SignIn(){
        const response = await AuthService();

        setUser(response.user);

        localStorage.setItem("App:User",JSON.stringify(response.user));
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




