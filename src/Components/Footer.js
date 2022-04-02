import React from 'react'
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
export default function Footer() {
    return (
        <div className="container">
            <div id="footer" className='row'>
                <div className="logo-div col-6">
                    <h3>DGTG</h3>
                    <p> DGTG is a full service digital marketing agency,
                        started in 2015 we are constantly evolving and
                        adding services in our portfolio.
                    </p>
                </div>
                <div className="footer-menu col-6 row">
                    <div className="footer-div-2 col-lg-4">
                        <h4>Company</h4>
                        <a className="footer-link" href="#"><li>About</li></a>
                        <a className="footer-link" href="#"><li>Services</li></a>
                        <a className="footer-link" href="#"><li>Our Team</li></a>
                        <a className="footer-link" href="#"><li>Work</li></a>
                    </div>

                    <div className="footer-div-3 col-lg-4">
                        <h4>Legal</h4>
                        <a className="footer-link" href="#"><li>Privacy policy</li></a>
                        <a className="footer-link" href="#"><li>Terms of use </li></a>
                    </div>

                    <div className="footer-div-4 col-lg-4">
                        <h4>Social</h4>
                        <div className="social-icons">
                            <a href="#"><li><AiFillTwitterCircle /></li></a>
                            <a href="#"><li><BsFacebook /></li></a>
                            <a href="#"><li><BsLinkedin /></li></a>
                        </div>
                    </div>
                </div>
                <div className="footer-text">
                    <hr></hr>
                    <p className='d-flex justify-content-center'>Copyright 2015-21 © DGTG All Right Reserved</p>
                </div>
            </div>
        </div>
    )
}
