import React, { Component } from "react";
import "./NavBar.css";
class NavBar extends Component {
  render() {
    return (
      <div className="container">
        <div className="nav ">
          <div className="containerLogoMedium">
            <img
              className="imgLogoMedium"
              src="https://miro.medium.com/max/1090/1*TGH72Nnw24QL3iV9IOm4VA.png"
              alt="medium"
            ></img>
          </div>
          <div className="barraNav d-flex align-items-center mt-3">
            <svg
              class="bi"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              class="bi"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 16a2 2 0 002-2H6a2 2 0 002 2z" />

              <path
                fill-rule="evenodd"
                d="M8 1.918l-.797.161A4.002 4.002 0 004 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 00-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 111.99 0A5.002 5.002 0 0113 6c0 .88.32 4.2 1.22 6z"
                clip-rule="evenodd"
              />
            </svg>

            <button className="buttonNavBar mr-3">Upgrade</button>

            <img
              class="imgIconMedium rounded-circle mt-0 "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQll4T5OfofBM0UJLri9wKU0mAAgkFlaLyfFGXwP7RmxEKj24zz&usqp=CAU"
              alt=""
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
export default NavBar;
