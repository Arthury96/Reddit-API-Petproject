import React from "react";
import "../styles/Reddits.css";

function Reddit(props) {
  return (
    <div>
      <a href={"https://reddit.com" + props.reddit.permalink} target="_blank">
        <h3>
          {props.reddit.score} | {props.reddit.title} | {props.reddit.author} |{" "}
          {props.reddit.num_comments}
        </h3>
        {props.reddit.selftext.length < 300 ? (
          <p>{props.reddit.selftext} </p>
        ) : null}

        {props.reddit.media ? <p>Contain Video!</p> : null}

        {props.reddit.post_hint === "image" ? (
          <img src={props.reddit.url}></img>
        ) : null}
        {!props.reddit.thumbnail ? (
          <a href={props.reddit.url}>Link {props.reddit.domain}</a>
        ) : null}
      </a>
    </div>
  );
}

export default Reddit;
