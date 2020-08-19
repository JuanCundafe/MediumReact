import React from "react";

import { Col, Row } from "antd";
import BasicPost from "../basicPost";
import { Link, useRouteMatch } from "react-router-dom";

import "./Section1.css";
function Section1({ array }) {
  const { url } = useRouteMatch();
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          {array.map(
            ({ title, subtitle, author, section, new_Date, img_url, key }) => (
              <BasicPost
                title={title}
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

export default Section1;
