import React from "react";
import './loading.css';

export default function Loading(){
    return(
        <div id="popup1" className="overlay">
            <div className="popup">
                <h2>Here i am</h2>
                <a className="close" href="#">&times;</a>
                <div className="content">
                    Thank to pop me out of that button, but now i'm done so you can close this window.
                </div>
            </div>
        </div>
    )
}