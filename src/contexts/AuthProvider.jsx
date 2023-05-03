import React, { createContext } from 'react'
import app from '../firebase/firebase.config'
import { getAuth } from "firebase/auth"

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = () => {
    return (
        <div>AuthProvider</div>
    )
}

export default AuthProvider