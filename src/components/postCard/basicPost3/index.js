import React from "react";

import "./basicPost3.css";

function basicPost3({
  title,
  subtitle,
  author,
  new_Date,
  section,
  img_url,
  key,
}) {

  return (
    <div id="second-card" class="card mb-3">
      <div class="row no-gutters d-flex align-items-center  flex-row-reverse flex-md-row">
        <div class="col-4">
          <img width="100%"
            src={img_url}
            class="card-img mb-3" alt="" />
        </div>
        <div class="col-8">
          <div class="card-body pr-0 pt-0">
            <h5 class="card-title2 font-weight-bold" data-toggle="modal" data-target="#exampleModalLong-${post.id}">{title}</h5>
            <div class="btn-group2 d-flex align-items-center justify-content-between">
              <div>
                <a class="text-dark user" href="#" data-toggle="popover" data-placement="top" data-author="${post.author}" data-age="${randomAge}" >{author}</a>
                <span class="text-dark user">in</span>
                <a class="text-dark user" href="https://medium.com/" data-toggle="popover2" data-placement="top" data-category="${post.category}">{section}</a>
                <br /><time class=" text-muted user" data-toggle="tooltip" data-placement="top" title="Updated ${post.date}">{new_Date}</time><span class="text-muted user" data-toggle="tooltip" data-placement="bottom" title=" ${randomNumber} min read"> <img width="6px"
                  src="images/primitive-dot (2).svg" alt="" /> 6 min
                                        read </span><span> <img width="8px" src="images/star (3).svg" alt="" />
                </span>
              </div>
              <div>
                <img class="d-md-none" width="23px" src="images/guardar1.svg" alt="guardar" data-toggle="tooltip" data-placement="bottom" title="Guardar" />
                <img class="dotts m-0" src="images/more_horiz-24px (1).svg" alt="dotts" data-toggle="popoverdott" data-placement="bottom" data-menu="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>




  );
}

export default basicPost3;