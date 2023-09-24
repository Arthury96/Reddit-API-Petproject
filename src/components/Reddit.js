import React from "react";
import "../styles/Reddits.css";

function Reddit(props) {
  return (
    <div className="reddit">
      <a className="score">{props.reddit.score}</a>
      <a
        className="reddit-content"
        href={"https://reddit.com" + props.reddit.permalink}
        target="_blank"
      >
        <p>Author: {props.reddit.author} </p>
        <h3>{props.reddit.title}</h3>
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
        <p>{props.reddit.num_comments}</p>
      </a>
    </div>
  );
}

export default Reddit;
