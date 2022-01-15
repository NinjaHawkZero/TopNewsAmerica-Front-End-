import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import StoryCardList from "../storys/StoryCardList";
import TopNewsApi from "../api/Newsapi";
import UserContext from "../auth/UserContext";


//Renders homepage


function Homepage() {
    const { currentUser } = useContext(UserContext);
    const [stories, setStories] = useState([]);

    useEffect(() => {
    async function getStories() {
        let stories = await TopNewsApi.getStories();
        setStories(stories);

    }
    getStories();}, []);
   
    return (
        <div className="Homepage">
          <div className="container text-center">
            <h1 className="mb-4 font-weight-bold">Top News America</h1>
            <p className="lead">All of America's top stories!</p>
           
           
           
        
        { currentUser && stories.length > 0 ? (
         <div className="StoryList col-md-8 offset-md-2">
        <StoryCardList stories={stories} />
        </div>
        
        ) : (<p className="lead">Sorry, no results were found!</p>)
        }
     
           
            {currentUser
                ? (<h2>
                  Welcome Back, {currentUser.username}!
                </h2>

                

                )

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