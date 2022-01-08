import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import LoginForm from "../auth/LoginForm";
import RegisterForm from "../auth/SignupForm";
import UserProfile from "../profile/UserProfile";
import StoryList from "../storys/StoryList";
import UserDataForm from "../profile/UserDataForm";
import PrivateRoute from "./PrivateRoute";


//Routes for the site;  Privite Routes is an authorization component wrapped around routes that require login.
//Going to a route that doesn't exist will redirect to homepage

function SiteRoutes({login, register}) {


    return (
        <div className="pt-5">
        <Routes>

          <Route exact path="/"
           element={<Homepage />} 
          />

          <Route exact path="/login"
           element={<LoginForm login={login} />} 
          />

          <Route exact path="/register"
           element= {<RegisterForm register={register} />}
          />

          <Route exact path="/userDataForm"
          element={<UserDataForm />}/>

          <Route exact path="/stories"
          element={<StoryList />}  
          />


          <Route path="/userProfile"
           element={<UserProfile />} 
          />

          <Navigate to="/" />
        </Routes>
      </div>

    );
}

export default SiteRoutes;