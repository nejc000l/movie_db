import React,{useState,useEffect} from "react";
import "./style/Navbar.css";
import { FaSearch } from "react-icons/fa";
import { AiOutlineSetting, AiOutlinePlus,AiOutlineBell} from "react-icons/ai";
import {RiEnglishInput} from 'react-icons/ri'
import {navItems} from './data/NavItems'
import Dropdown from './DropdownNav'

const Navbar = () => {
  const style = { fill: "#fff", fontSize: "1.5em", cursor: "pointer"}

  return (
    <nav className="nav nav__blue">
    <div className="nav-container">
   
    <div className="nav-list">
    <div>
      <a>
        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="The Movie Database (TMDB)" width="154" height="20"/>      
      </a>
    </div>
    <div className="nav-item">
    <ul>
       {navItems.map((item)=>{
          return(
            <li key={item.id} className="item.cName">
             <a href={item.path}>{item.title}</a>
            </li>
          )
        })}

      </ul>
      </div>
    </div>

    <div className="icons-list">
    <AiOutlinePlus className="icon" style={style} />
    <RiEnglishInput className="icon" style={style} />
    <AiOutlineBell className="icon" style={style} />
    <AiOutlineSetting className="icon" fill='#01b4e4' cursor='pointer' />
    <FaSearch className="icon" fill="#01b4e4" cursor='pointer'  />
    </div>
      </div>
      <div className="container-box">

      </div>

    </nav>
  );
};

export default Navbar;
