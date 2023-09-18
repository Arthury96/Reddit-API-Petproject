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
        <p>{props.reddit.selftext}</p>
        {props.reddit.media ? (
          <video
            controls
            src={props.reddit.media.reddit_video.fallback_url}
          ></video>
        ) : null}

        {props.reddit.post_hint === "image" ? (
          <img src={props.reddit.url}></img>
        ) : null}

        {props.reddit.post_hint === "link" ? (
          <a href={props.reddit.url}></a>
        ) : null}
      </a>
    </div>
  );
}

export default Reddit;
