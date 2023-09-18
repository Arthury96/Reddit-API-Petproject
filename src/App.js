import React, { useEffect, useState } from "react";
import Reddit from "./components/Reddit";

function App() {
  const [reddits, setReddits] = useState([]);
  const [subreddits, setSubreddits] = useState("popular");

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
            console.log(data);
          }
        });
      }
    );
  }, [subreddits]);

  return (
    <div className="header">
      <input
        type="text"
        className="input"
        value={subreddits}
        onChange={(e) => setSubreddits(e.target.value)}
      />
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
