import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../Firebase/firebase';

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    const signinWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    const signout = () => {
        return signOut(auth)
            .then(() =>{
                console.log('logout');
                setUser(null);
            })
    }

    const createuser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe()
        }
    }, []);

    const data = {
        user,
        setUser,
        loading,
        setLoading,
        signinWithGoogle,
        signout,
        createuser
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};
export { AuthContext }

export default AuthProvider;