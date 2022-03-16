import React, { useEffect } from "react";
import './secondpage.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import Slideshow from "./SlideShow";

export default function SecondPage(){
    useEffect(() => {
        Aos.init({ 
            offset: 200,
            duration: 2000 
         });
     }, []);

    return( 
        <div id="second-wrapper">
        <h1>quy trình thiết kế</h1>

            <div className="content-wrapper">
                <div className="item-wrapper">
                    <div id="myDiv" className="nb">
                        <h2>1</h2>
                    </div>
                        <div className="content">
                        
                    </div>
                </div>
            </div>
            <div>
                <Slideshow></Slideshow>
            </div>
        </div>
    )
}