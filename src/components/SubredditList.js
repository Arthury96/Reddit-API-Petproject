import React from "react";
import "../styles/Genre.css";

function Genre(props) {
  console.log(props);

  const removePrefix = () => {
    return props.list.display_name_prefixed.split("").slice(2).join("");
  };

  return (
    <div
      className="subreddit"
      onClick={() => props.setSubreddits(removePrefix())}
    >
      <h3>{props.list.display_name_prefixed}</h3>
    </div>
  );
}

export default Genre;
