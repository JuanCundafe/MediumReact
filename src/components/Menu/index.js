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
              <Link to="/PopularMedium">POPULAR</Link>
            )}
          </li>

          <li>
            {mediumPath === "momentum" ? (
              "Momentum"
            ) : (
              <Link to="/momentum">MOMENTUM</Link>
            )}
          </li>
          <li>
            {mediumPath === "coronavirus" ? (
              "Coronavirus"
            ) : (
              <Link to="/coronavirus">CORONAVIRUS</Link>
            )}
          </li>
          <li>
            {mediumPath === "onezero" ? (
              "Onezero"
            ) : (
              <Link to="/onezero">ONEZERO</Link>
            )}
          </li>
          <li>
            {mediumPath === "elemental" ? (
              "Elemental"
            ) : (
              <Link to="/elemental">ELEMENTAL</Link>
            )}
          </li>
          <li>{mediumPath === "gen" ? "Gen" : <Link to="/gen">GEN</Link>}</li>
          <li>
            {mediumPath === "zora" ? "Zora" : <Link to="/zora">ZORA</Link>}
          </li>
          <li>
            {mediumPath === "forge" ? "Forge" : <Link to="/forge">FORGE</Link>}
          </li>
          <li>
            {mediumPath === "humanParts" ? (
              "Human Parts"
            ) : (
              <Link to="/humanParts">HUMAN PARTS</Link>
            )}
          </li>
          <li>
            {mediumPath === "marker" ? (
              "Marker"
            ) : (
              <Link to="/marker">MARKER</Link>
            )}
          </li>
          <li>
            {mediumPath === "level" ? "Level" : <Link to="/level">LEVEL</Link>}
          </li>
          <li>
            {mediumPath === "heated" ? (
              "Heated"
            ) : (
              <Link to="/heated">HEATED</Link>
            )}
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
