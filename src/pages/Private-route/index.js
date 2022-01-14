import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Cookies from 'js-cookie';

const Privateroute = ({ component: Component, ...rest }) => {
    const isLoggedIn = !!Cookies.get('authToken');
    return (
        <Route {...rest} render={({ location, ...routerProps }) => isLoggedIn ? (
            <Component  {...routerProps} />
        ) : (
            <Redirect to={{ pathname: "/login", state: { from: location } }
            } />
        )} />
    )
}

export default Privateroute
