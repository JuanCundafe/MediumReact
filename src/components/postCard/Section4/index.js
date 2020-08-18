import React from "react";

import { Col, Row } from "antd";
import BasicPost from "../basicPost";

import "./Section4.css";

function Section4({ array }) {
  return (
    <div className="site-card-wrapper">
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
    </div>
  );
}

export default Section4;
