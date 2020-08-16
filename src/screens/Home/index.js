import React, { useState, useEffect } from "react";

import "./home.css";
import Post from "../../components/postCard";
import { CardDeck, Container, Col, Row } from "react-bootstrap";

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://reactsessions-ac545.firebaseio.com/equipouno.json")
      .then((response) => response.json())
      .then((articles) => {
        console.log(articles);
        let parsedArticles = [];
        for (let key in articles) {
          let article = articles[key];
          article["key"] = key;
          parsedArticles.push(article);
        }
        console.log(articles);
        if (parsedArticles) {
          setArticles(parsedArticles);
        }
      });
  }, []);

  return (
    <div className="Container">
      <Container>
        <Row className="Row2">
          <Col>
            <CardDeck>
              {articles.map(
                ({
                  Title,
                  subtitle,
                  author,
                  section,
                  new_Date,
                  img_url,
                  key,
                }) => (
                  <Post
                    Title={Title}
                    subtitle={subtitle}
                    author={author}
                    section={section}
                    new_Date={new_Date}
                    img_url={img_url}
                  ></Post>
                )
              )}
            </CardDeck>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
