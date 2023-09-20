import React from "react";

function Genre(props) {
  return (
    <div>
      <a
        href={"https://reddit.com/" + props.genre.display_name_prefixed}
        target="_blank"
      >
        <h3>{props.genre.display_name_prefixed}</h3>
      </a>
    </div>
  );
}

export default Genre;
