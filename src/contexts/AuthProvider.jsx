import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth"

const auth = getAuth(app);

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider;

    // Register User
    const registerUser = async (email, password, displayName) => {
        setLoading(true);
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        const newUser = {
            email: email,
            displayName: displayName
        };

        setUser(newUser);

        updateProfile(userCredential.user, {
            displayName: displayName,
        })
            .then(() => { })
            .catch((err) => console.error(err));
    };

    // google sign in
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // log in user
    const logInUser = async (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // sign out
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
            .then(() => { })
            .catch(err => console.error(err));
    };

    // user observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (current) => {
            setUser(current);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    // Reset password
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    const values = {
        registerUser,
        logInUser,
        logOut,
        googleSignIn,
        resetPassword,
        loading,
        user,
        auth
    }

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider