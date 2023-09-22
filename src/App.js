import React, { useEffect, useState } from "react";
import Reddit from "./components/Reddit";
import SubredditList from "./components/SubredditList";

function App() {
  const [reddits, setReddits] = useState([]);
  const [subreddits, setSubreddits] = useState("popular");
  const [subredditList, setSubredditList] = useState([]);

  useEffect(() => {
    fetch("https://www.reddit.com/r/" + subreddits + "/hot.json").then(
      (res) => {
        if (res.status != 200) {
          console.log("Something goes wrong :(");
          return;
        }

        res.json().then((data) => {
          if (data != null) {
            setReddits(data.data.children);
          }
        });
      }
    );
  }, [subreddits]);

  useEffect(() => {
    fetch("https://www.reddit.com/subreddits.json").then((res) => {
      if (res.status != 200) {
        console.log("Something goes wrong :(");
        return;
      }

      res.json().then((data) => {
        if (data != null) {
          setSubredditList(data.data.children);
        }
      });
    });
  }, [subreddits]);

  return (
    <div className="header">
      <input
        type="text"
        className="input"
        value={subreddits}
        onChange={(e) => setSubreddits(e.target.value)}
      />
      <div className="genres">
        {subredditList != null
          ? subredditList.map((list, index) => (
              <SubredditList
                key={index}
                list={list.data}
                setSubreddits={setSubreddits}
              />
            ))
          : ""}
      </div>
      <div className="reddits">
        {reddits != null
          ? reddits.map((reddit, index) => (
              <Reddit key={index} reddit={reddit.data} />
            ))
          : ""}
      </div>
    </div>
  );
}

export default App;
