import React from "react";
import UserStoryCard from "./UserStoryCard"

//Renders list of story card


function UserStoryCardList({stories, handleRemove}) {

    return (
        <div className="userStoryCardList">
            {stories.map(story => (
                <UserStoryCard
                key={story.id}
                saved_by={story.saved_by}
                author={story.author}
                title={story.title}
                description={story.description}
                published_at={story.published_at}
                urlToImage={story.urlToImage}
                handleRemove={handleRemove}

                />
            ))}

        </div>
    )

}

export default UserStoryCardList;