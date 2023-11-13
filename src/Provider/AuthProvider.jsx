import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const gooleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(null);
    const [user,setUser] = useState(null);


    useEffect(() => {
        const unSubscribe = onAuthStateChanged (auth, (currentUser) => {
         setUser(currentUser);
         setLoading(false)
         console.log('current user', currentUser);
     
        } )  
         
         return () => {
             unSubscribe();
         }
     },[])

    // signup
    const signUp = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    
    // signIn
    const logIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    // login with google
    const loginWithGoogle = () =>{
        return signInWithPopup(auth,gooleProvider);
    }

    // Sign Out 
const logOut = () => {
    setLoading(true)
    return signOut(auth);
}
    const userInfo = {
        signUp,
        loginWithGoogle,
        logIn,
        user,
        logOut,
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;