/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
// import "./Blog.css";
import { Typography, Button, Row, Col, Avatar } from "antd";
import {
  TwitterOutlined,
  LinkedinFilled,
  FacebookFilled,
  BookOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

//window.location.search
function Detail() {
  const [post, setPost] = useState({});

  useEffect(() => {
    let idBlog = window.location.pathname.split("/")[2];
    fetch(
      `https://reactsessions-ac545.firebaseio.com/equipotres/${idBlog}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, []);
  return (
    <div>
      <Row>
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 20, offset: 2 }}
          md={{ span: 12, offset: 6 }}
          lg={{ span: 12, offset: 6 }}
        >
          <Title className="titleArticle">{post.title ? post.title : ""}</Title>
          <Paragraph className="Subtitle" type="secondary">
            {post.text ? post.text : ""}
          </Paragraph>
          <div className="author">
            <div>
              <Avatar
                margin-right={0}
                size={50}
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />
            </div>
            <div>
              <ol>{post.author ? post.author : ""}</ol>
              <ol>Aug 18, 2020 · 6 min read</ol>
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
          <img className="imageB" src={post.urlimage ? post.urlimage : ""} />
          <Paragraph>{post.paragraph ? post.paragraph : ""}</Paragraph>
          <Paragraph>
            My kids should be preparing for camp right now. Back in January, I
            created a camp spreadsheet organizing where each of my four
            school-aged children would be during July and August. Now all those
            camps have been canceled as well.
          </Paragraph>
          <Paragraph>
            When nothing goes according to plan, it’s tempting to conclude that
            planning is a giant waste of time. Life is unknowable. Perhaps the
            hours I spent organizing my children’s summer should have been spent
            playing with them instead.
          </Paragraph>
          <Paragraph>
            The mismatch between plans and reality is well-documented. The
            project-tracking software company iDoneThis found that 41% of all
            to-do list items never get done. And just 15% of “dones” started as
            “to-do” items. We don’t do a lot of the things we plan, and we do a
            lot of things we don’t plan.
          </Paragraph>
          <Paragraph>
            But this doesn’t mean planning is futile. It’s just evidence that
            most people don’t plan particularly well.
          </Paragraph>
          <Paragraph>
            Even if life is unknowable, the process of thinking through the
            future can ensure that whatever future does arrive, you’re better
            prepared to deal with it. Planning is a beneficial use of your time
            whatever happens.
          </Paragraph>
          <Title level={4}>
            Planning enjoyable things increases the chances that they happenn
          </Title>
          <Paragraph>
            When it comes to moment-by-moment happiness, people rate socializing
            as more enjoyable than watching TV. Yet how many of us spend
            evenings and weekends watching TV because we haven’t made the effort
            to call friends and make plans to get together?
          </Paragraph>
          <Paragraph>
            Or take my Germany trip. With all my kids to be accounted for, and a
            husband who also has a job, I wouldn’t have been able to go without
            first making a plan. The coronavirus was unforeseen, but many plans
            do happen, and some activities (for example, anything requiring a
            reservation) are impossible without some forethought.
          </Paragraph>
          <Title level={4}>
            Planning helps people see both good and bad possibilities, and
            prepare for them
          </Title>
          <Paragraph>
            For example, after intense snowstorms in the winter of 2009 and
            2010, the federal government began requiring all agencies to have a
            telework policy spelling out who could reasonably work from home and
            how they’d do it. These plans weren’t written with the Covid-19
            pandemic in mind, but their existence meant that most agencies were
            able to continue operations.
          </Paragraph>
          <Title level={4}>Planning lets our minds relax</Title>
          <Paragraph>
            The “Zeigarnik effect,” named after a Russian memory researcher,
            refers to unfulfilled goals and tasks that persist in the mind.
            Picture yourself having trouble falling asleep because your brain is
            working through the presentation you know you need to write in the
            morning.
          </Paragraph>
          <Paragraph>
            One study found that when students were asked to make a plan to
            complete certain personal tasks, they were better able to focus on
            reading a novel than students who were asked simply to think about
            the personal tasks they wanted to complete. In other words, once
            there was a plan, their brains could let the matter go and turn to
            other things.
          </Paragraph>
          <Paragraph>
            In my case, having a summer camp schedule in January meant that I
            stopped thinking about what my kids would be doing over the summer
            from January until April. Then I began to realize that my plans
            looked unlikely. But those three months of freed up mental space
            aren’t nothing. The plans turned out to be useless, but planning
            gave me a break.
          </Paragraph>
        </Col>
      </Row>
      <footer className="footer">
        <div className="logoFooter">
          <img
            src="https://miro.medium.com/max/968/1*uLuWzCXfq2rt1t_TkuLB8A.png"
            height="40px"
          />
        </div>
        <div className="textFooter">
          <ol>About</ol>
          <ol>Help</ol>
          <ol>Legal</ol>
        </div>
      </footer>
    </div>
  );
}

export default Detail;
