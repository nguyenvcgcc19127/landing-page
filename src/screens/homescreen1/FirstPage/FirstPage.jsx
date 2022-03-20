import React from "react";
import './firstpage.css';


export default function FirstPage() {
    return(
        // Home page
        <div className="home-wrapper">
        <img className="logo" src={require('../../../assets/img/PNG.png')} />
            <div className="img-wrapper">
                <img className="title" src={require('../../../assets/img/tieude.png')} />
                <img className="laptop mover-img" src={require('../../../assets/img/hinh1.png')} />
            </div>
        </div>
    )
}