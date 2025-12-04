import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import Loading from '../Components/Loading';
import { Navigate, useLocation } from 'react-router';


const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext)
    const {pathname} = useLocation()

    if (user && user.email) {
        return { children }
    }
    if (loading) {
        return <Loading />;
    }
    return <Navigate state={pathname} to="/login" ></Navigate>
};

export default PrivateRoute;