import React, { useState, useContext, useEffect } from "react";
import UserContext from "../auth/UserContext";
import TopNewsApi from "../api/Newsapi";
import UserStoryCardList from "./UserStoryCardList";

//Render Profile Page with list of User stories

function UserProfile() {
    const {currentUser, removeStory} = useContext(UserContext);
    const [stories, setStories] = useState([]);


    useEffect(() => {
        async function getUserStories() {
          let stories = await TopNewsApi.getUserStories(currentUser.username);
          setStories(stories);
          
        }
        getUserStories();
      }, []);

    async function handleRemove(storyID){
         removeStory(storyID);
         setStories(stories.filter(story => story.id !== storyID))

        
    }
      


      return (
        <div className="userStoryList col-md-8 offset-md-2">
        
        

        {stories && stories.length > 0 ? (<UserStoryCardList stories={stories} handleRemove={handleRemove} />) : (<p className="lead">Sorry, no results were found!</p>)}
      </div>

      )
}

export default UserProfile; 