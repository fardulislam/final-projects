import React, { useEffect, useState } from "react";
import { Authcontext } from "./Authcontext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
   GoogleAuthProvider, 
   signInWithPopup,
   onAuthStateChanged,
   signOut,
   updateProfile
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";





const googleprovaider = new GoogleAuthProvider();

const Authprovaider = ({ children }) => {

  const [user,setuser]=useState(null);
  const [loading , setloading]= useState(true);

  // create user //
  const registeruser = (email, password) => {
    setloading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // signin user //
  const signinuser = (email, password) => {
     setloading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googlesignin = ()=>{
     setloading(true)
    return signInWithPopup(auth, googleprovaider)
  }

  const signout=()=>{
    setloading(true)
    return signOut(auth)
  }

  const updatauserprofile = (profile)=>{
    return updateProfile(auth.currentUser,profile)
  }

 

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentuser)=>{
      setuser(currentuser)
      setloading(false)
    })
    return ()=>{
      unsubscribe();
    }
  },[])

  const authinfo = {
    user,
    loading,
    registeruser,
    signinuser,
    googlesignin,
    signout,
    updatauserprofile,
  };
  return <Authcontext value={authinfo}>{children}</Authcontext>;
};

export default Authprovaider;
