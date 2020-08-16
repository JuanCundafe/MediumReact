import React from "react";

import { Card } from "react-bootstrap";

import "./postCard.css";

function Post({ Title, subtitle, author, new_Date, section, img_url }) {
  return (
    <Card className="card">
      <Card.Img variant="top" className="img" src={img_url} />
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

export default Post;
