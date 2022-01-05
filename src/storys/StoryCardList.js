import React from "react";
import StoryCard from "./StoryCard";

//Renders list of story card


function StoryCardList({stories}) {

    return (
        <div className="StoryCardList">
            {stories.map(story => (
                <StoryCard
                key={story.url}
                author={story.author}
                title={story.title}
                description={story.description}
                published_at={story.published_at}
                urlToImage={story.urlToImage}

                />
            ))}

        </div>
    )

}

export default StoryCardList;