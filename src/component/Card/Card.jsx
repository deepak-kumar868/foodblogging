import React from 'react'
import './Card.css'

const Card = (props) => {
    let {image,title}=props;
  return (
    <>
    <div className="cardcontainer">
        <img src={image} alt="" />
        <div className="cardsubcontainer">
        <div className="title">{title}</div>
        <div className="description">PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</div>
        <button className="readmorecard">Read More</button>
        </div>
    </div>
    </>
  )
}

export default Card