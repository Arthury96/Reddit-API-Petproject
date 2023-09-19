import React from "react";

function Genre(props) {
  return (
    <div>
      <a href={"https://reddit.com" + props.genre.permalink} target="_blank">
        <h3>{props.genre.title}</h3>
      </a>
    </div>
  );
}

export default Genre;
