import React from 'react';
import "./Banner.css";


export function Banner({ image, texte }) {
  return(
    <div className="banner">
        <img src={image} alt="Baniere Kasa"/>
        <h1>{texte}</h1>
    </div>
  );
}


export default Banner