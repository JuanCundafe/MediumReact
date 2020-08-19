import React from "react";
import BasicPost from "../basicPost";
import "./Section1.css";
import BasicPost3 from "../basicPost3"
import BasicPost2 from "../basicPost2";


function Section1({ array }) {
  return (

    <div>
      {array.map(
        ({ title, subtitle, author, section, new_Date, img_url, key }) => (
          <BasicPost
            title={title}
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

export default Section1;
