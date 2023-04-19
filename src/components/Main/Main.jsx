import React from 'react';
import { Link } from 'react-router-dom';
import "./Main.css";

function Main(props) {
    const {children} = props;
  
    return <div className="Main">{children}</div>; 
    }
    
    export default Main;