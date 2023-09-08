import React from 'react'
import logo from '../../image/logo.png'
import './Footer.css'
import facebook from "../../image/facebook.png"
import twitter from "../../image/twitter.png"
import instagram from '../../image/instagram.png'

const Footer = () => {
  return (
    <>
    <div className="footercontainer">
        <div className="footerlogo">
            <img src={logo} alt="loading" />
        </div>
        <div className="contact">
            <div className="contactheading">Contact Us</div>
            <div className="contactcontent-1">
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434
            </div>
            <div className="contactcontent-2">
            example2020@gmail.com
            </div>
            <div className="contactcontent-3">(904) 443-0343</div>
        </div>
        <div className="last">
            <div className="more">
                <div className="moreheading">
                    More
                </div>
                <div className="morecontent">
                    <div className="element-1">About Us</div>
                    <div className="element-2">Products</div>
                    <div className="element-3">Career</div>
                    <div className="element-4">Contact Us</div>
                </div>
            </div>
            <div className="sociallinks">
                <div className="sociallinksheading">
                    Social Links
                </div>
                <img className='instagram' src={instagram} alt="" />
                <img className='twitter' src={twitter} alt="" />
                <img className='facebook' src={facebook} alt="" />
                <div className="copyright">© 2022 Food Truck Example</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer