import React, { useEffect, useState } from "react";
import Reddit from "./components/Reddit";
import Genre from "./components/Genre";

function App() {
  const [reddits, setReddits] = useState([]);
  const [subreddits, setSubreddits] = useState("popular");
  const [genres, setGenre] = useState([]);

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
          setGenre(data.data.children);
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
        {genres != null
          ? genres.map((genre, index) => (
              <Genre
                key={index}
                genre={genre.data}
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
