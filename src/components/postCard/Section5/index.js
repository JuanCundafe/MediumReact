import React from "react";

import { CardDeck } from "react-bootstrap";
import BasicPost from "../basicPost";

import "./Section5.css";

function Section5({ array }) {
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
            key={key}
          ></BasicPost>
        )
      )}
    </CardDeck>
  );
}

export default Section5;
