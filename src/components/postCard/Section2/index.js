import React from "react";
import "./Section2.css";
import BasicPost3 from "../basicPost3";

function Section2({ array }) {
  return (
    <div>

      {array.map(
        ({ Title, subtitle, author, section, new_Date, img_url, key }) => (
          <BasicPost3
            Title={Title}
            subtitle={subtitle}
            author={author}
            section={section}
            new_Date={new_Date}
            img_url={img_url}
            key={key}
          ></BasicPost3>
        )
      )}
    </div>

  );
}

export default Section2;
