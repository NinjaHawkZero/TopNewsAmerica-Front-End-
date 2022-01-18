import React, {useContext, useState} from "react";
import "./StoryCard.css";
import UserContext from "../auth/UserContext";


//Shows information about a story


function StoryCard({author, title, description, url,  urlToImage, publishedAt}) {
    let story = {author, title, description, publishedAt, url, urlToImage};
    const {saveStory} = useContext(UserContext);
    const [saved, setSaved] = useState();


    //Saves Story for User
    async function handleSave(evt){
        saveStory(story);
        setSaved(true);
    }

    return (
        <div className="card w-50" > {saved}


       {urlToImage && <img src={urlToImage} className="float-right ml-5"  className="card-img-top"/>}
       <div class="card-header">{title}</div>
        <div className="card-body">

          <h6 className="card-title">{author}</h6>
          
          <p class="card-text">{url}</p>
          <p class="card-text">{publishedAt}</p>
           <p class="card-text">{description}</p>
           
        
           <button
              className="btn btn-danger font-weight-bold text-uppercase float-right"
            
              onClick={handleSave}
              disabled={saved}
          >
            {saved ? "Saved!" : "Save"}
          </button>
     
        </div>
      
      </div>

    )
}

export default StoryCard;

//{urlToImage && <img src={urlToImage} className="float-right ml-5"  className="card-img-top"/>}