import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Circles } from 'react-loader-spinner'
import PropTypes from 'prop-types'
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";


const PrivateRoute = ( {children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="justify-center">
                <Circles
                    height="80"
                    width="80"
                    color="#0E46A3"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        )
    }


    if (!user) {
        return <Navigate to='/register' state={location?.pathname || '/'} />
    }
    return (
        <div>
            {children}
        </div>
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.object.isRequired,
}
export default PrivateRoute;