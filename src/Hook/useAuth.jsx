import React, { useContext } from 'react';
import { Authcontext } from '../Coontext/Authcontext/Authcontext';

const useAuth = () => {
    const authinfo = useContext(Authcontext);

    return authinfo ;
};

export default useAuth;