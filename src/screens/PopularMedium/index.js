import React, { useState, useEffect } from "react";
import "./PopularMedium.css";
import { Card, Avatar, Meta } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import "./PopularMedium.css";

function Popular() {
  const [post, setPost] = useState({});
  const { Meta } = Card;
  useEffect(() => {
    fetch(
      "https://reactsessions-ac545.firebaseio.com/equipouno/-MEpsrQWYec93gEIxd66.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPost(data);
      });
  }, []);

  return (
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
  );
}

export default Popular;
