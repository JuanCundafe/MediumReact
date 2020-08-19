import React from "react";


import BasicPost from "../basicPost";

import "./Section3.css";

function Section3({ array }) {
  return (

    <div>
      {array.map(
        ({ Title, subtitle, author, section, new_Date, img_url, key }) => (
          <BasicPost
            Title={Title}
            subtitle={subtitle}
            author={author}
            section={section}
            new_Date={new_Date}
            img_url={img_url}
            key={key}
          ></BasicPost>
        )
      )}
    </div>
  );
}

export default Section3;
