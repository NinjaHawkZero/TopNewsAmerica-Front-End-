import React, {useState, useEffect} from "react";
import TopNewsApi from "../api/Newsapi";
import StoryCardList from "./StoryCardList";

//Renders page with list of stories


function StoryList() {
    const [stories, setStories] = useState(null);

    useEffect(() => {
    async function getStories() {
        let stories = await TopNewsApi.getStories();
        setStories(stories);

    }
    getStories();}, []);


    return(
        <div className="StoryList col-md-8 offset-md-2">
        
        {stories.length
            ? <StoryCardList stories={stories} />
            : <p className="lead">Sorry, no results were found!</p>
        }
      </div>
    )
}


export default StoryList; 