import React from "react";
import "./Menu.css";
// RRD
import { Link } from "react-router-dom";

function Menu({ mediumPath }) {
  return (
    <nav>
      <div>
        {" "}
        <div
          class="mr-2 cursor-hand nav-control left"
          onclick="scrollToLeft()"
        ></div>
        <ul class="list-scroll horizontalContenedor mt-3">
          <li>{mediumPath === "home" ? "Home" : <Link to="/">HOME</Link>}</li>
          <li>
            {mediumPath === "PopularMedium" ? (
              "Popular"
            ) : (
              <Link to="/PopularMedium">
                <a>POPULAR </a>
              </Link>
            )}
          </li>

          <li>
            {mediumPath === "momentum" ? (
              "Momentum"
            ) : (
              <Link to="/momentum">
                <a>MOMENTUM</a>
              </Link>
            )}
          </li>
          <li>
            <a>CORONAVIRUS</a>
          </li>
          <li>
            <a>ONEZERO</a>
          </li>
          <li>
            <a>ELEMENTAL</a>
          </li>
          <li>
            <a>GEN</a>
          </li>
          <li>
            <a>ZORA </a>
          </li>
          <li>
            <a>FORGE</a>
          </li>
          <li>
            <a>HUMAN PARTS</a>
          </li>
          <li>
            <a>MARKER</a>
          </li>
          <li>
            <a>LEVEL</a>
          </li>
          <li>
            <a>HEATED</a>
          </li>
        </ul>
        <div
          class="ml-2 cursor-hand nav-control right"
          onclick="scrollRight()"
        ></div>
      </div>
    </nav>
  );
}

export default Menu;
