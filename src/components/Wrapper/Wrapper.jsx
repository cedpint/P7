import React, { useState } from 'react';
import  "./Wrapper.css";

export function Wrapper(props) {

   const[isVisible, setIsVisible] = useState(true);

   const handleClick= () =>{
    setIsVisible(!isVisible);
   }
   
   return(
    <div className='global-wrapper'>       
            <div className='descritpion-title_chevron'>
                <h3>{props.title}</h3>
                <i className="fa-solid fa-chevron-up" onClick={handleClick}></i>
            </div>
            { isVisible?
            <p className="description_content">
            {props.content}
            </p>  :<></>
            }      
    </div>
    );
}
