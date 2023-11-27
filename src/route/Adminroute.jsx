import React, { useContext } from 'react';
import { authcontext } from '../provider/Authprovider';
import { Navigate } from 'react-router-dom';
import useAdmin from '../hooks/useadmin';

const Adminroute = ({children}) => {
    const {user,loading}=useContext(authcontext)
    const [isAdmin,isAdminloadin]=useAdmin()
if(loading || isAdminloadin){
    return (
        <div className='h-screen flex justify-center items-center'>
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      );
}
if(user &&isAdmin){
return children
}
return <Navigate state={location.pathname} to="/"></Navigate>
};

export default Adminroute;