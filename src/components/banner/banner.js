import React from "react";
import style from './banner.module.css';
import BannerVector from "../../assets/vectors/banner-img.svg";
import Button from "../btn/btn";

export default function Banner() {
    return (
        <div className={style.banner}>
            <div className={style.infoContainer}>
                <h1 
                data-sal="slide-right" 
                data-sal-delay="300" 
                data-sal-duration="900" 
                data-sal-easing="ease">Building Modern Tools for Modern Teams</h1>
                <p 
                data-sal="slide-right" 
                data-sal-delay="600" 
                data-sal-duration="900" 
                data-sal-easing="ease">Our international team of strategists, designers, and developers is here to help you navigate the dark spaces when it comes to your digital footprint in China.</p>
                <div
                data-sal="slide-right" 
                data-sal-delay="900" 
                data-sal-duration="900" 
                data-sal-easing="ease"
                style={{width: '40%', margin: '32px 0'}}>
                    <a href="https://wetech188297.typeform.com/to/b0nuCjfo" target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}>
                        <Button content="Contact Us" type="primary"></Button>
                    </a>
                </div>
            </div>
            <BannerVector 
            data-sal="slide-left" 
            data-sal-delay="900" 
            data-sal-duration="1000" 
            data-sal-easing="ease"
            className={style.bannerImg}>
            </BannerVector>    
        </div>
    )
  }