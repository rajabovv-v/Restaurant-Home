import React from 'react'
import glassesImg from '../images/glassesImg.jpg'
import '../assets/style/style.css';

function Menu() {
  return (
    <div className="menu">
 
        {/* <img className="menu-img" src={glassesImg} alt="" /> */}
  
        <div className="container">
            <div className="menu-row">
              <a href='#' className='menu-p1'>Bar Menu</a>
              <a href='#' className='menu-p1'>Food Menu</a>
              <a href='#' className='menu-p1'>Desserts Menu</a>
            </div>
        </div>
    </div>
  )
}

export default Menu