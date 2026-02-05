import React from 'react';
import Logo from '../Component/Logo/Logo';
import { Outlet } from 'react-router';
import authimg from '../assets/authImage.png'
const AuthLayout = () => {
    return (
        <div className='max-w-11/12 mx-auto '>
         <Logo></Logo>
         <div className='flex items-center mt-15'>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
            <div className='flex-1 '>
                <img src={authimg} alt="" />
            </div>
        </div>   
        </div>
    );
};

export default AuthLayout;