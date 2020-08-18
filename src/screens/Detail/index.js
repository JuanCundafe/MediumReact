
import React, { useState, useEffect } from "react"
import "./Detail.css"
import { Typography, Button, Row, Col, Avatar } from "antd"
import {
  TwitterOutlined,
  LinkedinFilled,
  FacebookFilled,
  BookOutlined,
  EllipsisOutlined,
} from "@ant-design/icons"


const { Title, Paragraph } = Typography

function Detail() {
  const [post, setPost] = useState({})

  useEffect(() => {
    let keys = window.location.pathname.split("/")[2]
    fetch(`https://reactsessions-ac545.firebaseio.com/equipouno/-MEptE5FJeq7FdDaCL7J.json`).then((res) => res.json())
      .then((data) => {
        setPost(data)
      })
  }, [])
  return (
    <div>
      <Row>
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 20, offset: 2 }}
          md={{ span: 12, offset: 6 }}
          lg={{ span: 12, offset: 6 }}
        >
          <Title className="TitlePost">{post.title}</Title>
          <Paragraph className="subtitlePost" type="secondary">
            {post.text ? post.text : ""}
          </Paragraph>
          <div className="Writer">
            <div>
              <Avatar
                size={50}
                src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <div>
              <ol>{post.author ? post.author : ""}</ol>
              <ol>Aug 19, 2020 · 4 min read</ol>
            </div>
            <div>
              <Button>Follow</Button>
            </div>
          </div>
          <div className="icons">
            <TwitterOutlined />
            <LinkedinFilled />
            <FacebookFilled />
            <BookOutlined />
            <EllipsisOutlined />
          </div>
          <Paragraph>{post.content}</Paragraph>

        </Col>
      </Row>
    </div>

  )
}

export default Detail
