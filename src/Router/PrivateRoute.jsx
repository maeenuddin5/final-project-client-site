import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
// import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Loading from "../skeleton/Loading";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    if (loading) {
        return <div className="w-10/12 mx-auto mt-20 min-h-[calc(100vh-325px)]"><Loading></Loading></div>
    }

    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to='/login' replace={true}></Navigate>
};

export default PrivateRoute;