import React from 'react';
import  "./ImgBanner.css";

export function ImgBanner(props) {

    const pictures = props.pictures;

   return (
    /*map for iteration on pictures and retun all of them/flat  */
    <div className='img-banner'>
	   { pictures.map((pic) => (
       <img key={pic} src={pic} alt=''></img>
       ))} 
    </div>
);
}

export default ImgBanner