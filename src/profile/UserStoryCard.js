import React from "react";
import "./StoryCard.css";



//Shows information about a story


function UserStoryCard({id, saved_by, author, title, description, published_at, url, urlToImage, handleRemove}) {
    let story = {id, saved_by, author, title, description, published_at, url, urlToImage};
    



    //Saves Story for User
    

    return (
        <div className="StoryCard"> 
        <div className="card-body">

          <h6 className="card-title">{title}
          {urlToImage && <img src={urlToImage} className="float-right ml-5" />}  </h6>
          <p>{author}</p>
          <div><small>{url}</small></div>
          <div><small>{published_at}</small></div>
           <div><p>{description}</p></div>
          
          <button
              className="btn btn-danger font-weight-bold text-uppercase float-right"
              onClick={() => (handleRemove(story.id))}
              
          >
            { "Remove Story"}
          </button>
        </div>
      </div>

    )
}

export default UserStoryCard;