import React, { useState, useEffect } from "react";

import "./home.css";
import { Col, Row } from "antd";
import Section1 from "../../components/postCard/Section1";
import Section2 from "../../components/postCard/Section2";
import Section3 from "../../components/postCard/Section3";
import Section4 from "../../components/postCard/Section4";
import Section5 from "../../components/postCard/Section5";
import SectionPopular from "../../components/postCard/SectionPopular";

function Home() {
  const [articles, setArticles] = useState([]);
  const [firstArticle, setfirstArticle] = useState([]);
  const [middleArticles, setmiddleArticles] = useState([]);
  const [lastArticle, setlastArticle] = useState([]);
  const [general1, setgeneral1] = useState([]);
  const [popular, setpopular] = useState([]);
  const [general2, setgeneral2] = useState([]);

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
          setfirstArticle(
            parsedArticles
              .sort(function (currentItem, nextItem) {
                return nextItem.milisegundos + currentItem.milisegundos;
              })
              .reverse()
              .slice(0, 1)
          );
          setmiddleArticles(
            parsedArticles
              .sort(function (currentItem, nextItem) {
                return nextItem.milisegundos + currentItem.milisegundos;
              })
              .slice(1, 4)
          );
          setlastArticle(
            parsedArticles
              .sort(function (currentItem, nextItem) {
                return nextItem.milisegundos + currentItem.milisegundos;
              })
              .slice(4, 5)
          );
          setgeneral1(
            parsedArticles
              .sort(function (currentItem, nextItem) {
                return nextItem.milisegundos + currentItem.milisegundos;
              })
              .slice(5, 11)
          );
          setpopular(parsedArticles.slice(7, 11));
          setgeneral2(parsedArticles);
        }
      });
  }, []);

  return (
    <>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col>
            <Section1 array={firstArticle}></Section1>
          </Col>
        </Row>
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
          <SectionPopular array={popular}></SectionPopular>
        </Col>
        <Col>
          <Section5 array={general2}></Section5>
        </Col>
      </div>
    </>
  );
}

export default Home;
