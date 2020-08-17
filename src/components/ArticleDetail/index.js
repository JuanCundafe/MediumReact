import React from "react";

import "./ArticleDetail.css";

function basicPost({
  title,
  author,
  new_Date,
  section,
  img_url,
  img_author,
  content,
}) {
  return (
    <div className="page">
      <div>{title}</div>
      <div className="socialMedia"></div>
      <div className="infoSection">
        <div>{img_author}</div>
        <div>
          <div>{author}</div>
          <div>{new_Date} · 6 min. read ★</div>
        </div>
      </div>
      <div className="content">{content}</div>
      <div>{content}</div>
      <div>{img_url}</div>
      <div>{content}</div>
    </div>
  );
}

export default basicPost;
