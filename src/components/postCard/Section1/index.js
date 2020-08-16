import React from "react";

import { CardDeck } from "react-bootstrap";
import BasicPost from "../basicPost";

function Section1({ array }) {
  return (
    <CardDeck>
      {array.map(
        ({ Title, subtitle, author, section, new_Date, img_url, key }) => (
          <BasicPost
            Title={Title}
            subtitle={subtitle}
            author={author}
            section={section}
            new_Date={new_Date}
            img_url={img_url}
          ></BasicPost>
        )
      )}
    </CardDeck>
  );
}

export default Section1;
