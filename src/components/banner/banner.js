import React from "react";
import style from './banner.module.css';
import BannerVector from "../../assets/vectors/banner-img.svg";
import Button from "../btn/btn";

export default function Banner() {
    return (
        <div className={style.banner}>
            <div className={style.infoContainer}>
                <h1>Building Modern Tools for Modern Teams</h1>
                <p>Our international team of strategists, designers, and developers is here to help you navigate the dark spaces when it comes to your digital footprint in China.</p>
                <div style={{width: '40%', margin: '32px 0'}}>
                    <a href="https://wetech188297.typeform.com/to/b0nuCjfo" target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}>
                        <Button content="Contact Us" type="primary"></Button>
                    </a>
                </div>
            </div>
            <BannerVector className={style.bannerImg}></BannerVector>    
        </div>
    )
  }