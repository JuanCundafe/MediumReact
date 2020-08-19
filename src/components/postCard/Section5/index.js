import React from "react";

import { Col, Row } from "antd";
import BasicPost from "../basicPost";

import "./Section5.css";

function Section5({ array }) {
  return (
    <Row gutter={16}>
      <Col span={8}>
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
      </Col>
    </Row>

  );
}

export default Section5;
