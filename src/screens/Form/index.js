import React, { useState } from "react";
import woman from "../../components/navBar/images/medium_FORM.jpeg"
//CSS




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
    setAuthor("")
    setContent("")
    setDescription("")
    setImageUrl("")
    setSection("")
    setTitle("")


  };

  //Handlers
  const handleInputImage = ({ target: { name, value } }) => {
    setImageUrl(value);
    console.log(value);
  };

  const handleInputImageAuthor = ({ target: { name, value } }) => {
    setImageAuthor(value);
    console.log(value);
  };
  const handleInputTitle = ({ target: { name, value } }) => {
    setTitle(value);
    console.log(value);
  };
  const handleInputDescription = ({ target: { name, value } }) => {
    setDescription(value);
    console.log(value);
  };
  const handleInputAuthor = ({ target: { name, value } }) => {
    setAuthor(value);
    console.log(value);
  };
  const handleInputContent = ({ target: { name, value } }) => {
    setContent(value);
    console.log(value);
  };
  const onChangeSection = ({ target: { name, value } }) => {
    setSection(value);
    console.log(value);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault()
    let objectPost = { img_url, title, description, author, section, content, img_author }
    onFinish(objectPost)
  }

  return (
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <form id="newPostForm" class="mt-5" onSubmit={handleOnSubmit}>
            <div class="form-group">
              <label for="">URL Image</label>
              <input type="url" class="form-control" id="imageurl" name="imageurl" onChange={handleInputImage} value={img_url} />
            </div>
            <div class="form-group">
              <label for="title">Title</label>
              <input type="text" class="form-control" id="title" name="title" onChange={handleInputTitle} value={title} />
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <input type="text" class="form-control" id="description" name="description" onChange={handleInputDescription} value={description} />
            </div>
            <div class="form-group">
              <label for="author">Author</label>
              <input type="text" class="form-control" id="author" name="author" onChange={handleInputAuthor} value={author} />
            </div>
            <div class="form-group">
              <label for="category">Category</label>
              <select class="form-control" id="category" name="category" onChange={onChangeSection} value={section}>
                <option value="">Choose One</option>
                <option>Momentum</option>
                <option>Coronavirus</option>
                <option>Gen</option>
                <option>Elemental</option>
                <option>OneZero</option>
                <option>Forge</option>
                <option>Human Parts</option>
                <option>Mind Cafe</option>
                <option>UX Collective</option>
                <option>The Journal Blog</option>


              </select>
            </div>
            <div class="form-group">
              <label for="content">Content</label>
              <textarea type="text" class="form-control" rows="6" id="content" name="content" onChange={handleInputContent} value={content}></textarea>
            </div>
            <button type="submit" class="btn btn-info" id="buttonS">
              Submit Post
          </button>
          </form>
        </div>
        <div class="col-12 d-flex align-items-center col-md-6">
          <img src={woman} class="img-fluid" alt="" />
        </div>
      </div>

    </div>

  );
}

export default PostForm;
