import React, { useState } from "react";
import { Form, Button, Select, Row, Col } from "antd";
import CustomInput from "../../components/CustomInput";
//CSS
import styles from "./Form.module.css";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function PostForm() {
  //States
  const [img_url, setImageUrl] = useState("");
  const [img_author, setImageAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [section, setSection] = useState("popular");

  //Default form functions
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    let date = new Date();
    let milisegundos = date.getTime();
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ];
    let new_Date = months[date.getMonth()] + " " + date.getDate();

    values = { ...values, date, milisegundos, new_Date };
    console.log("Received values of form with date: ", values);
    fetch("https://reactsessions-ac545.firebaseio.com/equipouno.json", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(values),
    }).then((response) => console.log(response.json));
  };

  //Handlers
  const handleInputImage = (name, value) => {
    setImageUrl(value);
    console.log(value);
  };

  const handleInputImageAuthor = (name, value) => {
    setImageAuthor(value);
    console.log(value);
  };
  const handleInputTitle = (name, value) => {
    setTitle(value);
    console.log(value);
  };
  const handleInputDescription = (name, value) => {
    setDescription(value);
    console.log(value);
  };
  const handleInputAuthor = (name, value) => {
    setAuthor(value);
    console.log(value);
  };
  const handleInputContent = (name, value) => {
    setContent(value);
    console.log(value);
  };
  const onChangeSection = (name, value) => {
    setSection(value);
    console.log(value);
  };

  return (
    <Row className={styles.container}>
      <Col className="form-column" xs={24} sm={24} md={24} lg={12}>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          // onSubmit={handleSubmit}
        >
          <Form.Item label="imageUrl">
            <CustomInput
              className={styles.item}
              placeholder="Image URL"
              name="img_url"
              value={img_url}
              error="Debe ingresar la URL de una imagen"
              callback={handleInputImage}
            />
          </Form.Item>

          <Form.Item label="img_author">
            <CustomInput
              className={styles.item}
              placeholder="Image URL"
              name="img_author"
              value={img_author}
              error="Debe ingresar la URL de una imagen para mostrar como avatar del autor"
              callback={handleInputImageAuthor}
            />
          </Form.Item>

          <Form.Item label="title">
            <CustomInput
              className={styles.item}
              placeholder="Title"
              name="title"
              value={title}
              error="Debe ingresar el título del Post"
              callback={handleInputTitle}
            />
          </Form.Item>

          <Form.Item label="description">
            <CustomInput
              className={styles.item}
              placeholder="Image URL"
              name="description"
              value={description}
              error="Debe ingresar una breve descripción del post"
              callback={handleInputDescription}
            />
          </Form.Item>

          <Form.Item label="Author">
            <CustomInput
              className={styles.item}
              placeholder="Author"
              name="author"
              value={author}
              error="Debe ingresar el autor del post"
              callback={handleInputAuthor}
            />
          </Form.Item>

          <Form.Item label="content">
            <CustomInput
              className={styles.item}
              placeholder="Post content"
              name="content"
              value={content}
              error="Debe ingresar el texto del post"
              callback={handleInputContent}
            />
          </Form.Item>

          <Form.Item
            name="section"
            label="section"
            rules={[{ required: false }]}
          >
            <Select
              className={styles.itemSelector}
              placeholder="Please select the category of your post!"
              onChange={onChangeSection}
              allowClear
            >
              <Option value="Momentum">Momentum</Option>
              <Option value="Coronavirus">Coronavirus</Option>
              <Option value="Gen">Gen</Option>
              <Option value="Elemental">Elemental</Option>
              <Option value="OneZero">OneZero</Option>
              <Option value="Forge">Forge</Option>
              <Option value="Human Parts">Human Parts</Option>
              <Option value="Mind Cafe">Mind Cafe</Option>
              <Option value="UX Collective">UX Collective</Option>
              <Option value="The Journal Blog">The Journal Blog</Option>
            </Select>
          </Form.Item>

          <Row xs={24} sm={24} md={24} lg={24}>
            <Col className="bottonR" span={12} push={11}>
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Submit Post
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Col>
      <Col span={14} push={3} xs={0} sm={0} md={0} lg={12}>
        <img className={styles.image} />
      </Col>
    </Row>
  );
}

export default PostForm;
