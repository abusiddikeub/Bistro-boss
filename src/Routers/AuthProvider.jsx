import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';



export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true);

  // Google ar jonnoo -----------------
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = ()=>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider);
  }

// signUp ar jonno ----
  const createUser = (email,password) =>{
               setLoading(true);
               return createUserWithEmailAndPassword(auth,email,password)
  }
// login ar jonno --------
  const signIn =(email,password)=>{
               setLoading(true);
               return signInWithEmailAndPassword(auth,email,password)
  }

  // update profile ar jonno 
const updateUserProfile = (name,photo)=>{
 return updateProfile(auth.currentUser, {
    displayName : name, photoURL: photo
  })

}

// authState change ar jonno ----------
useEffect(()=>{

  const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log( "currentUser",currentUser);
// jwt server side theka data clinet side anchi---
               if(currentUser){

                axios.post('http://localhost:5000/jwt',{
                  email:currentUser.email
                })
                .then(data =>{
                  console.log(data.data.token)
                  localStorage.setItem('access-token', data.data.token)
                })
               }
               else{
                localStorage.removeItem('access-token')
               }

            setUser(currentUser);
            setLoading(false)
        });

        return() =>{
            unsubscribe();
        }

},[])

// logOut ar jonno  --------------
const logOut = () => {
  setLoading(true);
  return signOut(auth);
}

const authInfo={
               user,
               loading,
               createUser,
               signIn,
               logOut,
               updateUserProfile,
               googleSignIn
}               
               return (
                              <AuthContext.Provider value={authInfo}>
                                     {children}        
                              </AuthContext.Provider>
               );
};

export default AuthProvider;