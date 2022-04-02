import React from 'react'
import img1 from '../../images/dgtgGroup.png'
import icon from '../../images/icon.png'
import { BsArrowRight } from "react-icons/bs";
import Slider from '../Slider';
export default function Features() {
    return (
        <div id="features">

            <div className="upper row">
                <div className="upper-left col-lg-6">
                    <h1>Why</h1>
                    <h1><span style={{ color: '#AC2027' }}>Choose</span> us?</h1>
                </div>
                <div className="upper-right col-lg-6">
                    <p>
                        Why We started with the idea to do email marketing, learned about affiliate marketing, added mobile advertising and content writing and SEO.
                    </p>
                </div>
            </div>
            <div className="middle row">
                <div className="middle-left col-lg-6">
                    <p>
                        We became tech friendly and built social media team and our own studio and production team. You see, we can do anything with time :)
                        200+ Clients served in last 6 years
                    </p>
                </div>
                <div className="middle-right col-lg-6">
                    <Slider />
                </div>

            </div>

            <div className="bottom row d-flex justify-content-between">

                <img className='col-lg-6' src={img1} alt="Image" />

                <div className="bottom-right col-lg-6">
                    <h1>We're <span style={{ color: '#AC2027' }}>DGTG</span> </h1>
                    <p>We became tech friendly and built social media team and our own studio and production team. You see, we can do anything with time :)</p>
                </div>
            </div>

            <div className="bottom-banner justify-content-between d-flex">

                <div className='d-flex justify-content-around'>
                    <div>
                        <img className="bottom-banner-icon" src={icon} alt="icon" />
                    </div>
                    <div className="bottom-banner-box">
                        <h3>Let's get started</h3>
                        <h3>working together.</h3>
                    </div>
                </div>
                <div className="banner-contact-box">
                    <a href="/" className="banner-contact">Contact us <BsArrowRight /></a>
                </div>


            </div>

        </div>
    )
}
