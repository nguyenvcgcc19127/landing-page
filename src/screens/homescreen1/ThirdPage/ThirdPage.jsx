import React, { useEffect } from "react";
import './thirdpage.css';
import Aos from "aos";
import 'aos/dist/aos.css';

export default function ThirdPage(){
    useEffect(() => {
        Aos.init({ 
            offset: 200,
            duration: 2000 
         });
     }, []);

    return( 
        <div id="third-wrapper">
            <div className="form-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="icon-wrapper">
                            <div className="col-lg">
                                <div className="row item-center">
                                    <div className="col-lg-2">
                                        <img className="icon" src={require("../../../assets/img/icon1.png")}/>
                                    </div>
                                    <div className="col-lg-10">
                                        <p className="p-content">200% gia tăng hiệu xuất doanh nghiệp</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg">
                                <div className="row item-center">
                                    <div className="col-lg-2">
                                        <img className="icon" src={require("../../../assets/img/icon1.png")}/>
                                    </div>
                                    <div className="col-lg-10">
                                        <p className="p-content">200% gia tăng hiệu xuất doanh nghiệp</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}