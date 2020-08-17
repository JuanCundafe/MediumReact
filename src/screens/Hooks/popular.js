import React, { useState, useEffect } from "react";

// CSS

function GetMedium() {
  const [post, setMedium] = useState([]);

  useEffect(() => {
    fetch("https://reactsessions-ac545.firebaseio.com/equipouno.json")
      .then((res) => res.json())
      .then((post) => {
        console.log(post);
        let parsedPost = [];
        for (let key in post) {
          let post = post[key];
          post["key"] = key;
          parsedPost.push(post);
        }
        if (parsedPost) {
          setMedium(parsedPost);
        }
      });
  }, []);

  return;
}
export default GetMedium;
