import React from 'react';
import {
    Route,
    Redirect,
} from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const PublicRoute = ({ children, ...rest }: any) => {
    const { userToken  }: any = useAuth();

    return (
        <Route
            {...rest}
            render={({ location }) =>
                !userToken?.accessToken ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/tournament',
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PublicRoute;