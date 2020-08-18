import React, { useState, useEffect } from "react";

import "./Coronavirus.css";
function Coronavirus() {
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(
      "https://reactsessions-ac545.firebaseio.com/equipouno/-MEptE5FJeq7FdDaCL7J.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPost(data);
      });
  }, []);

  return <di></di>;
}

export default Coronavirus;
