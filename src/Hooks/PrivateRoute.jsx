import React, { use} from 'react';
import Loading from '../Components/Loading';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthProvider';


const PrivateRoute = ({ children }) => {
    const  {user, loading} = use(AuthContext);
    const { pathname } = useLocation();

    console.log(user);
    if (user && user.email) { 
        return children;
    }

    if (loading) {
        return <Loading />;
    }


    return <Navigate to="/login" state={ pathname } />;
};

export default PrivateRoute;