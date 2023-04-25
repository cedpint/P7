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
        <i className='fas fa-chevron-up' onClick={showContent}></i>
        </p>

        {isContenVisible && <p className='collapse-content'>{Array.isArray(props.content)?props.content.map((el) => {return <p>{el}</p>}):props.content}</p>}
        </div>
    );
}    
export default Collapse;