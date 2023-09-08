import React from 'react'
import './Home.css'
import logo from '../../image/logo.png'
import pizza from '../../image/pizza.png'
import redblank from '../../image/redblank.png'
const Home = () => {
  return (
    <>
    <div className="container">
    <div className="left">
        <div className="logo">
            <img src={logo} alt='loading'/>
        </div>
        <div className="content">
            <div className="heading">
               Discover the <span className='highlight'>Best</span> Food and Drinks
            </div>
            <div className="para">
                Naturally made health care products for the better care and support of your body.
            </div>
            <button className='explore'>Explore Now!</button>
        </div>
    </div>
    <div className="right">
        <img src={pizza} alt='loading'/>
    </div>
    <div className="redblank">
        <img src={redblank} alt='loading'/>
    </div>
    <button className="getintouch">Get In Touch</button>
    </div>
    </>
  )
}

export default Home