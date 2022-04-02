import React from 'react'
import bannerImg from '../../images/bannerImg.png';
import { BsArrowRight } from "react-icons/bs";
export default function Banner() {
  return (
    <div id="banner">
      <div className="row">
        <div className="col-lg-6 banner-left">
          <h1>Transform Your</h1>
          <h1 className="banner-business">Brand.</h1>
          <div className="banner-left-bottom">
           <p>We're a <strong style={{color:'#171F33'}}>digital marketing agency</strong> that helps businesses to get found, get talked about, and grow to the next level! </p>
          </div>
          <div className="services-box d-flex justify-content-start">
            <a className="services" href="/">We do it all <BsArrowRight /></a>
            <a className="services" href="/">Lets get started <BsArrowRight /></a>
          </div>
        </div>
        <div className="col-lg-6 banner-img">
          <img src={bannerImg} alt="image" />
        </div>
      </div>
    </div>

  )
}
