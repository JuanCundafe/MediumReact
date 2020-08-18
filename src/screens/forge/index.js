import React, { useState, useEffect } from "react";
import { Card, Avatar, Row, Col } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

function Forge() {
  const [post, setPost] = useState({});
  const { Meta } = Card;
  useEffect(() => {
    fetch(
      "https://reactsessions-ac545.firebaseio.com/equipouno/-MF1fUfepyg7ifCxzqvZ.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPost(data);
      });
  }, []);

  return (
    <Row>
      <Col span={12}>
        <Card
          className="carPopular"
          style={{ width: 300 }}
          cover={<img alt="example" src={post.img_url} />}
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            className="imageAutor"
            avatar={<Avatar src={post.img_author} />}
            title="Card title"
            description="This is the description"
          />
        </Card>
      </Col>
      <Col span={12}>POPULAR MEDIUM </Col>
    </Row>
  );
}

export default Forge;
