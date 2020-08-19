
import React from "react";

import "./basicPost2.css";
import dotts from "../../navBar/images/more_horiz-24px (1).svg"
import save from "../../navBar/images/guardar1.svg"

function basicPost2({
  title,
  description,
  author,
  new_Date,
  section,
  img_url,
  key,
}) {

  return (
    <div class="card-mb-3">
      <div class="row no-gutters d-flex">
        <div class="col-mb-4">
          <img class="imageess"
            src={img_url}
            alt="atardecer" />
        </div>
        <div class="col-8 ml-4">
          <div class="textos">
            <p class="card-title font-weight-bold" data-toggle="modal">{title}</p>
            <p class="text-card" data-toggle="popover3" data-placement="top" >{title}
            </p>
          </div>
          <div class="row">
            <div class="col-9 p-0">
              <a class="text-dark user ml-3" href="#" data-toggle="popover" data-placement="top" data-author="${post.author}" data-age="${randomAge}">{author}</a>
              <span class="text-dark user">in </span>
              <a class="text-dark user" href="#" data-toggle="popover2" data-placement="top" data-category="${post.category}">{title}</a>
              <br /><time class=" text-muted user ml-3" data-toggle="tooltip" data-placement="top" title="Updated ${post.date}">{new_Date}</time><span class="text-muted small" data-toggle="tooltip" data-placement="bottom" title=" ${randomNumber} min read"> <img width="6px"
                src="images/primitive-dot (2).svg" alt="doot" /> 6 min
                                    read </span><span> <img width="8px" src="images/star (3).svg" alt="" /> </span>
            </div>
            <div class="col-3 p-0 d-flex justify-content-end">
              <img class="d-md-none" width="23px" src={save} alt="guardar" data-toggle="tooltip" data-placement="bottom" title="Guardar" />

              <img class="mr-2 menu" width="23px" src={dotts} alt="dotts" data-toggle="popoverdott" data-placement="bottom" data-menu="" />
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}

export default basicPost2;
