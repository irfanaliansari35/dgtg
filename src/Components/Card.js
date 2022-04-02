import React from 'react'
import '../ComponentsCss/card.css'
export default function Card(props) {
    let {img,title} = props;
    return (
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={img} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                {/* <p className="card-text">{text}</p> */}
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>

    )
}
