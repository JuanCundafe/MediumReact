import React, { useState } from "react";
import { Container } from "react-bootstrap";

// Component
import ArticleDetail from "../../components/ArticleDetail";

// CSS
import "./CompleteArticle.css";

function CompleteArticle(articleKey) {
  //esto puede no servir andaba probando
  const [choosedArticle, setchoosedArticle] = useState([]);

  const chooseArticle = () =>
    setchoosedArticle(
      array.filter(({ articleKey: key }) => key === articleKey)
    );

  return (
    <Container>
      {array.map(
        ({
          title,
          author,
          new_Date,
          section,
          img_url,
          img_author,
          content,
          key,
        }) => (
          <ArticleDetail
            title={title}
            author={author}
            new_Date={new_Date}
            section={section}
            img_url={img_url}
            img_author={img_author}
            content={content}
            key={key}
          ></ArticleDetail>
        )
      )}
    </Container>
  );
}

export default CompleteArticle;
