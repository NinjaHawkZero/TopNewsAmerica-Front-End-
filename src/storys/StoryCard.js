import React, {useContext, useState} from "react";
import "./StoryCard.css";
import UserContext from "../auth/UserContext";


//Shows information about a story


function StoryCard({author, title, description, published_at, url, urlToImage}) {
    let story = {author, title, description, published_at, url, urlToImage};
    const {saveStory} = useContext(UserContext);
    const [saved, setSaved] = useState();


    //Saves Story for User
    async function handleSave(evt){
        saveStory(story);
        setSaved(true);
    }

    return (
        <div className="StoryCard"> {saved}
        <div className="card-body">

          <h6 className="card-title">{title}
          {urlToImage && <img src={urlToImage} className="float-right ml-5" />}  </h6>
          <p>{author}</p>
          <div><small>{url}</small></div>
          <div><small>{published_at}</small></div>
           <div><p>{description}</p></div>
          
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