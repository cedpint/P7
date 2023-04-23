import React from 'react';
import "./Banner.css";
import imgBanner from './../../assets/banner.png'

export function Banner(props) {
  return(
    <div className="banner">
        <img src={imgBanner} alt="Baniere Kasa"/>
        <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}


export default Banner