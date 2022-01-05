import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import UserContext from "../auth/UserContext";


//Renders homepage


function Homepage() {
    const { currentUser } = useContext(UserContext);
   
    return (
        <div className="Homepage">
          <div className="container text-center">
            <h1 className="mb-4 font-weight-bold">Top News America</h1>
            <p className="lead">All of America's top stories!</p>
            {currentUser
                ? <h2>
                  Welcome Back, {currentUser.username}!
                </h2>
                : (
                    <p>
                      <Link className="btn btn-primary font-weight-bold mr-3"
                            to="/login">
                        Log in
                      </Link>
                      <Link className="btn btn-primary font-weight-bold"
                            to="/register">
                        Register
                      </Link>
                    </p>
                )}
          </div>
        </div>
    );
  }
  
  export default Homepage;