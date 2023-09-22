import React from "react";

function Genre(props) {
  console.log(props);

  const removePrefix = () => {
    return props.list.display_name_prefixed.split("").slice(2).join("");
  };

  return (
    <div>
      <a onClick={() => props.setSubreddits(removePrefix())}>
        <h3>{props.list.display_name_prefixed}</h3>
      </a>
    </div>
  );
}

export default Genre;
