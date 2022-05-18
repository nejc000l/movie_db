import React, { useState } from "react";
import { moviesDropdown } from "./data/NavItems";
import { tvDropdown } from "./data/NavItems";
import { popularDropdown } from "./data/NavItems";
import { moreDropdown } from "./data/NavItems";

import "./style/Dropdown.css";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {moviesDropdown.map((item) => {
          return (
            <li key={item.id}>
              <a
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>

      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {tvDropdown.map((item) => {
          return (
            <li key={item.id}>
              <a
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>

      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {popularDropdown.map((item) => {
          return (
            <li key={item.id}>
              <a
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>

      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {moreDropdown.map((item) => {
          return (
            <li key={item.id}>
              <a
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>



    </>
  );
}

export default Dropdown;
