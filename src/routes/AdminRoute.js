import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
    const { user, isLogin, admin } = useAuth();
    if (isLogin) {
        return (
            <div class='h-screen flex justify-center items-center'>
                <div class='animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500'></div>
            </div>
        );
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                (user?.displayName || user?.email) && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;
