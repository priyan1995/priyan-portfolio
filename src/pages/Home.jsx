import React from "react";
import HomeBannerImg from '../styles/image/home/banner-6.png';


export const Home = () => {
    return (
        <>
            <div className="pd-home-wrapper">
                <div className="simon-sparks-bg">
                    <img src={HomeBannerImg} className="pd-home-wrapper__banner"/>
                </div>
            </div>
        </>
    )
}