import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        
        <div className="footer-content"> 
         
            <div className="left-footer">
                <h2>StepUpShoes</h2>
                <br />
                <a href="About Us">About Us</a><br />
                <a href="">Contact Us</a>
            </div>
            <div className="right-footer">
                <h2>Join Us</h2>
                <img src={assets.Facebook} alt="facebook" />
                <img src={assets.whatsapp}/>
                <img src={assets.youtube}/>
            </div>
            
        </div>
        <br />
        <p>
            Copyright @{new Date().getFullYear()}. All rights reserved.
        </p>
       
    </div>
  )
}

export default Footer