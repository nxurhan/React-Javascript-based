import React from 'react';
import { Redirect, Route } from 'react-router-dom'
import Leftsidebar from '../components/Leftsidebar';
import Navbar from '../components/Navbar';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            localStorage.getItem("authToken") ? (
                <div>
                    <Navbar />
                    <div className="wrapper">
                        <Leftsidebar />
                        <div className="main">
                            <Component {...props} />
                        </div>
                    </div>
                </div>
            ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }

                        }}
                    />
                )
        }
    />
);
export default PrivateRoute;

