import React, { useState, useEffect } from "react";

import "./home.css";
import { Container, Col, Row } from "react-bootstrap";
import Section1 from "../../components/postCard/Section1";
import Section2 from "../../components/postCard/Section2";
import Section3 from "../../components/postCard/Section3";
import Section4 from "../../components/postCard/Section4";
import Section5 from "../../components/postCard/Section5";

function Home() {
  const [articles, setArticles] = useState([]);
  const [firstArticle, setfirstArticle] = useState([]);
  const [middleArticles, setmiddleArticles] = useState([]);
  const [lastArticle, setlastArticle] = useState([]);
  const [general1, setgeneral1] = useState([]);

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
          setfirstArticle(parsedArticles.slice(0, 1));
          setmiddleArticles(parsedArticles.slice(1, 4));
          setlastArticle(parsedArticles.slice(4, 5));
          setgeneral1(parsedArticles.slice(5, 11));
        }
      });
  }, []);

  return (
    <div className="Container">
      <Container>
        <Row className="Row2">
          <Col>
            <Section1 array={firstArticle}></Section1>
          </Col>
          <Col>
            <Section2 array={middleArticles}></Section2>
          </Col>
          <Col>
            <Section3 array={lastArticle}></Section3>
          </Col>
          <Col>
            <Section4 array={general1}></Section4>
          </Col>
          <Col>
            <Section5 array={articles}></Section5>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
