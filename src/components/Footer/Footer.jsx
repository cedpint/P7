import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className= "Footer">
        <div className="footer_logo">
            <img src="footerlogo.png" alt="logo de Kasa"/>
        </div>
        <div className='footer_copyright'>
        © 2020 Kasa. All rights reserved
        </div>
    </div>
  )
}

export default Footer