import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../Pages/Shared/Navber/Navber';
import Footer from '../Pages/Shared/Footer/Footer';

const Rootlayout = () => {
    return (
        <div className='max-w-11/12 mx-auto'>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Rootlayout;