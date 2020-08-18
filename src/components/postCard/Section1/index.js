import React, { useState, useEffect } from "react";

import { CardDeck } from "react-bootstrap";
import BasicPost from "../basicPost";
import CompleteArticle from "../../screens/CompleteArticle";

import "./Section1.css";

function Section1({ array }) {
  const [keyArticle, setkeyArticle] = useState([]);

  const chooseArticle = (key) => setkeyArticle(key);

  useEffect(() => {
    <CompleteArticle key={keyArticle} />;
  }, [chooseArticle]);

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
            onClick={chooseArticle}
          ></BasicPost>
        )
      )}
    </CardDeck>
  );
}

export default Section1;
