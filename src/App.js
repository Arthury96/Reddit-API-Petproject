import React, { useEffect, useState } from "react";
import Reddit from "./components/Reddit";
import SubredditList from "./components/SubredditList";
import "./styles/App.css";
import reddit from "./styles/reddit2.png";

function App() {
  // states of all componens

  const [reddits, setReddits] = useState([]);
  const [subreddits, setSubreddits] = useState("popular");
  const [subredditList, setSubredditList] = useState([]);

  // fetch method for getting data without authorization
  useEffect(() => {
    fetch("https://www.reddit.com/r/" + subreddits + "/hot.json").then(
      (res) => {
        if (res.status !== 200) {
          console.log("Something goes wrong :(");
          return;
        }

        res.json().then((data) => {
          if (data !== null) {
            setReddits(data.data.children);
          }
        });
      }
    );
  }, [subreddits]);
 // separatly get subreddit list 
  useEffect(() => {
    fetch("https://www.reddit.com/subreddits.json").then((res) => {
      if (res.status !== 200) {
        console.log("Something goes wrong :(");
        return;
      }

      res.json().then((data) => {
        if (data !== null) {
          setSubredditList(data.data.children);
        }
      });
    });
  }, [subreddits]);

  return (
    <div className="main">
      <header className="header">
        <img src={reddit} alt="Reddit" />
        <p>Reddit Lite</p>
        <input
          type="text"
          className="input"
          value={subreddits}
          onChange={(e) => setSubreddits(e.target.value)}
        />
      </header> 
      {/* Using map method, to order all content */}
      <section className="content">
        <section className="reddits">
          {reddits != null
            ? reddits.map((reddit, index) => (
                <Reddit key={index} reddit={reddit.data} />
              ))
            : ""}
        </section>
        <section className="subreddit-list">
          {subredditList != null
            ? subredditList.map((list, index) => (
                <SubredditList
                  key={index}
                  list={list.data}
                  setSubreddits={setSubreddits}
                />
              ))
            : ""}
        </section>
      </section>
    </div>
  );
}

export default App;
