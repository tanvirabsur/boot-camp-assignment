import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../Firebase/firebase';

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    const signinWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    const signut = () => {
        return signOut(auth)
            .then(() =>{
                console.log('logout');
                setUser(null);
            })
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
        signut
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};
export { AuthContext }

export default AuthProvider;