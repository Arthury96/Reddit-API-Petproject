import React from "react";

function Reddit(props) {
  return (
    <div>
      <a href={"https://reddit.com" + props.reddit.permalink} target="_blank">
        <h3>{props.reddit.title}</h3>
      </a>
    </div>
  );
}

export default Reddit;
