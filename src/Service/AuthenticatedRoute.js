import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthenticationService from './AuthenticationService';


export default function AuthenticatedRoute({component: Component, ...rest}){  
    return (
        <Route {...rest} render = {props => {
            if(AuthenticationService.isUserLoggedIn())
                return <Component {...props} />
            else
                return <Redirect to="/SignIn" />
        }} />
    )
}
