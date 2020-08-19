import React, { useState, useEffect } from "react";
import { Card, Avatar, Row, Col } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

function HumanParts() {
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
    <div className="container">
      <div className="Row">
        <div className="col-12">
          <h1>HUMAN PARTS</h1>
        </div>
        <div className="col-12 col-md-8">
          <div className="card">
            <img
              src={post.img_url}
              className="card-img-top"
              alt="card coronavirus"
            ></img>
            <div className="card-body">
              <p className="card-text ">{post.title}</p>
              <p className="card-text-subtitulo">
                <p className="subtitulos text-muted">{post.subtitle}</p>
                <div className="cont-author d-flex flex-row">
                  <div className="col-0">
                    <img
                      src={post.img_author}
                      className="card-img-author rounded-circle"
                      alt="card coronavirus"
                    ></img>
                  </div>
                  <div className="col-8 ">
                    <p className="section mb-0">{post.section}</p>
                    <p className="date  small text-muted">
                      {post.new_Date} min read ★
                    </p>
                  </div>
                  <br />
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HumanParts;
