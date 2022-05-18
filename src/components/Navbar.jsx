import React,{useState,useEffect} from "react";
import "./style/Navbar.css";
import { FaSearch } from "react-icons/fa";
import { AiOutlineSetting, AiOutlinePlus,AiOutlineBell} from "react-icons/ai";
import {RiEnglishInput} from 'react-icons/ri'
const Navbar = () => {
  const style = { fill: "#fff", fontSize: "1.5em" }

  return (
    <nav className="nav nav__blue">
    <div className="nav-container">
   
    <div className="nav-list">
    <ul>
        <li>Movies</li>
        <li>TV Shows</li>
        <li>People</li>
        <li>More</li>
      </ul>
    </div>
    <div className="icons-list">
    <AiOutlinePlus className="icon" style={style} />
    <RiEnglishInput className="icon" style={style} />
    <AiOutlineBell className="icon" style={style} />
    <AiOutlineSetting className="icon" fill='#01b4e4'/>
    <FaSearch className="icon" fill="#01b4e4"  />
    </div>
      </div>
    </nav>
  );
};

export default Navbar;
