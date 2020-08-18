import React from "react";

import { Card, Col, Row } from "antd";

import "./basicPost.css";

function basicPost({
  title,
  subtitle,
  author,
  new_Date,
  section,
  img_url,
  key,
}) {
  const { Meta } = Card;
  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <Card
            hoverable
            cover={<img className="img" alt="imgArticle" src={img_url} />}
          >
            <Meta title={title} />
            <p>{subtitle}</p>
            <div className="author">
              {author} in {section}
            </div>
            <div className="info">{new_Date} · 6 min. Read ⭑</div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default basicPost;
