import React, { useState } from 'react';
import  "./Collapse.css";

export function Collapse (props) {

    const [isContenVisible, setisContenVisible] = useState(false);

    const showContent = () =>{
        setisContenVisible(!isContenVisible);

    }

   return(
    <div className='global-collapse'>       
        <p className='collapse-header'>
        <span>{props.title}</span>
        <i className={isContenVisible?'fas fa-chevron-down':'fas fa-chevron-up'} onClick={showContent}></i>
        </p>

        {isContenVisible && <div className='collapse-content'>{Array.isArray(props.content)?props.content.map((el) => 
        {return <p key={el.toString()}>{el}</p>}):props.content}</div>}
        </div>
    );
}    
export default Collapse;