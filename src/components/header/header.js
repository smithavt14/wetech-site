import React from "react";
import hurray from "../../assets/images/hurray.svg";
import Styles from './header.module.css';
import { Link } from "gatsby";

console.log(hurray);

export default function Header() {
  return (
    <div 
    data-sal="slide-down"
    data-sal-delay="1000"
    data-sal-duration="1000"
    data-sal-easing="ease"
    className={Styles.header}>
      <Link style={{color: '#6C63FF'}} to="">
        <div style={{position: `relative`}}>
          <p className={Styles.logoText}>Zima Digital</p>
          <img src={hurray} alt="This is a little blue guy!" className={Styles.logoImg}></img>
        </div>
      </Link>
      
      <div className="flex">
        <Link className={Styles.link} to="/">ABOUT</Link>
        <Link className={Styles.link} to="/">PROJECTS</Link>
        <a className={Styles.btnLink} href="https://wetech188297.typeform.com/to/b0nuCjfo" target="_blank">CONTACT</a>
      </div>
    </div>
  )
}