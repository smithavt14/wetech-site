import React from "react";
import hurray from "../../assets/images/hurray.svg";
import style from './header.module.css';
import { Link } from "gatsby";

console.log(hurray);

export default function Header() {
  return (
    <div className={style.header}>
      <Link style={{color: '#6C63FF'}} to="/">
        <div style={{position: `relative`}}>
          <p className={style.logoText}>Zima Digital</p>
          <img src={hurray} alt="This is a little blue guy!" className={style.logoImg}></img>
        </div>
      </Link>
      
      <div className="flex">
        <Link className={style.link} to="/">ABOUT</Link>
        <Link className={style.link} to="/">PROJECTS</Link>
        <a className={style.btnLink} href="https://wetech188297.typeform.com/to/b0nuCjfo" target="_blank" rel="noreferrer">CONTACT</a>
      </div>
    </div>
  )
}