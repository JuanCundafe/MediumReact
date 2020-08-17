import React, { useState, useEffect } from "react";

import { Card } from "react-bootstrap";

import "./basicPost.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function basicPost({
  Title,
  subtitle,
  author,
  new_Date,
  section,
  img_url,
  key,
}) {
  return (
    <Card
      onClick={() => setArticleActive(!articleActive)}
      style={{ cursor: "pointer" }}
    >
      <div className="container">
        <Card.Img variant="top" className="img" src={img_url} />
      </div>
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>{subtitle}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="Author">
          {author} in {section}
        </small>
      </Card.Footer>
      <Card.Footer>
        <small className="text-muted"> {new_Date} · 6 min. Read</small>
      </Card.Footer>
    </Card>
  );
}

export default basicPost;
