
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authcontext } from '../provider/Authprovider';

const Privateroute = ({children}) => {
    const { user, loading } = useContext(authcontext);
    const location = useLocation();
    console.log(location.pathname);
  
    if (loading) {
      return (
        <div className='h-screen flex justify-center items-center'>
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      );
    }
  
    if (user) {
      return children;
    }
  
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default Privateroute;