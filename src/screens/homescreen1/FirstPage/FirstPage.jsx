import React from "react";
import './firstpage.css';


export default function FirstPage() {
    return(
        // Home page
        <div id="home-wrapper" className="section">
            <div className="img-wrapper">
                <img className="logo" src={require('../../../assets/img/PNG.png')} />
                <img className="title" src={require('../../../assets/img/tieude.png')} />
                <img className="laptop" src={require('../../../assets/img/hinh1.png')} />
            </div>
        </div>
        
    )
}