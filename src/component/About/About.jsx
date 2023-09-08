import React from 'react'
import './About.css'
import aboutimage from '../../image/aboutimage.png'

const About = () => {
  return (
   <>
   <div className="aboutcontainer">
    <div className="aboutleft">
        <img src={aboutimage} alt='loading'/>
    </div>
    <div className="aboutright">
        <div className="aboutheading">About Us</div>
        <div className="aboutcontent">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.
        </div>
        <button className="readmore">Read More</button>
    </div>
   </div>
   </>
  )
}

export default About