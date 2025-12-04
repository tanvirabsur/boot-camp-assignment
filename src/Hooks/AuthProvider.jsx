import React, { createContext, useEffect, useState } from 'react';
import {onAuthStateChanged} from 'firebase/auth';
import auth from '../Firebase/firebase';

const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false); 
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unsubscribe()
            
        }
    },[])

    const data = {
       user,
       setUser,
         loading,
         setLoading
    }

    return (
       <AuthContext value={data}>
            {children}
       </AuthContext>
    );
};
export {AuthContext};
export default AuthProvider;