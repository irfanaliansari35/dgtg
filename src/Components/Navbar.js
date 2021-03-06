import React from 'react'
import brandImg from '../images/brand.png'
export default function Navbar() {
  return (
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
  
    <a className="navbar-brand" href="/">
    <img src={brandImg}  alt=""/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Our Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Our Work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Career</a>
        </li>
      </ul>
    </div>
  
  <a href="/" className='contact-us'>Contact Us</a>
</nav>
    </div>
  )
}
