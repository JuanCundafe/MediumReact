import React, { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";

import { getPost } from "../../services";

function Detail() {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    getPost("-MF1ei3Nfrrwd2nNdO3c").then((data) => {
      setPost(data);
      console.log("post desde detail:", post);
    });
  }, [id]);

  const {
    title,
    subtitle,
    section,
    author,
    content,
    img_url,
    date,
    key,
  } = post;

  return (
    <>
      <div
        class=""
        id="${key}"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5
                class="modal-title font-weight-bold"
                id="exampleModalLongTitle"
              >
                {title}
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              {subtitle}
              <img width="100%" src={img_url} class="card-img mb-3" alt="" />
              <hr />
              {content}
              <hr />
              {section} {date}
            </div>
            <div class="modal-footer">
              <Link to="/Home"> Regresar </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
