import React from 'react';
import useAuth from '../Hook/UseAuth';
import { Navigate, useLocation } from 'react-router';

const Priviteroute = ({children}) => {

    const location = useLocation();
    console.log(location)

    const {user,loading}= useAuth();


    if(loading){
        return <div className='flex justify-center'><span className="loading loading-infinity loading-xl"></span></div>
    }

    if(!user){
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
    }
    return children ;
};

export default Priviteroute;