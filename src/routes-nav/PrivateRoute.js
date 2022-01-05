import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import UserContext from "../auth/UserContext";

//Checks if user is logged in, if not redirects


function PrivateRoute({ exact, path, children }) {
    const { currentUser } = useContext(UserContext);
  
  
  
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
  
    return (
        <Route exact={exact} path={path}>
          {children}
        </Route>
    );
  }
  
  export default PrivateRoute;