import React from 'react';
import  "./ImgBanner.css";

export function ImgBanner(props) {
   return(
    <div className='img-banner'>
	    <img src={props.imageUrl} alt='Appartement Kasa'/>
    </div>
);
}

export default ImgBanner