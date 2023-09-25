import React from "react";
import "../styles/Reddits.css";

function Reddit(props) {
  return (
    <div className="reddit">
      <a className="score">{props.reddit.score}</a>
      <div className="reddit-content">
        <p className="author">Author: {props.reddit.author} </p>
        <a
          className="link-content"
          href={"https://reddit.com" + props.reddit.permalink}
          target="_blank"
          rel="noreferrer"
        >
          <h3>{props.reddit.title}</h3>
          {props.reddit.selftext.length < 300 ? (
            <p>{props.reddit.selftext} </p>
          ) : null}

          {props.reddit.media ? <p className="video">Contain Video!</p> : null}

          {props.reddit.post_hint === "image" ? (
            <img src={props.reddit.url} alt="Reddit"></img>
          ) : null}
          {!props.reddit.thumbnail ? (
            <a className="link" href={props.reddit.url}>
              Link {props.reddit.domain}
            </a>
          ) : null}
          <p className="comments">Comments: {props.reddit.num_comments}</p>
        </a>
      </div>
    </div>
  );
}

export default Reddit;
