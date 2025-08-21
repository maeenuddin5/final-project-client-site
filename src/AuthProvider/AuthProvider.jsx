import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logoutUser = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("currentUser", currentUser);
            const userEmail = currentUser?.email || user?.email;
            const loggerUser = { email: userEmail };
            setUser(currentUser);
            setLoading(false)

            if (currentUser) {
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, loggerUser,
                    { withCredentials: true })
                    .then(res => console.log(res.data))
                    .catch(err => console.log(err))
            }
            else {
                axios.post(`${import.meta.env.VITE_API_URL}/logout`, loggerUser,
                    { withCredentials: true })
                    .then(res => console.log(res.data))
                    .catch(err => console.log(err))
            }
        })
        // Clean up subscription when the component unmounts
        return () => unsubscribe();
    }, [user])


    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logoutUser,
        googleLogin,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;