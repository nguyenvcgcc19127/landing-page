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
            <div className="contents-wrapper">
                <h1>tại sao chúng tôi luôn được tin tưởng và lựa chọn</h1>
                <div className="container">
                    <div className="row">
                            <div className="col-lg">
                                <div className="icon-wrapper">
                                    <div className="row item-center">
                                        <div className="col-lg-2">
                                            <img className="icon" src={require("../../../assets/img/icon1.png")}/>
                                        </div>
                                        <div className="col-lg-10">
                                            <p className="text-content">Gia tăng 200% hiệu suất doanh nghiệp</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="icon-wrapper">
                                    <div className="row item-center">
                                        <div className="col-lg-2">
                                            <img className="icon" src={require("../../../assets/img/icon2.png")}/>
                                        </div>
                                        <div className="col-lg-10">
                                            <p className="text-content">Đánh giá hơn 90% 5 sao từ các đối tác</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="icon-wrapper">
                                    <div className="row item-center">
                                        <div className="col-lg-2">
                                            <img className="icon" src={require("../../../assets/img/icon3.png")}/>
                                        </div>
                                        <div className="col-lg-10">
                                            <p className="text-content">Thiết kế ĐỘC ĐÁO, HIỆN ĐẠI</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg">
                                <div className="icon-wrapper">
                                    <div className="row item-center">
                                        <div className="col-lg-2">
                                            <img className="icon" src={require("../../../assets/img/icon4.png")}/>
                                        </div>
                                        <div className="col-lg-10">
                                            <p className="text-content">Công nghệ IN ẤN HOÀN TOÀN MỚI</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="icon-wrapper">
                                    <div className="row item-center">
                                        <div className="col-lg-2">
                                            <img className="icon" src={require("../../../assets/img/icon5.png")}/>
                                        </div>
                                        <div className="col-lg-10">
                                            <p className="text-content">Đội ngũ thiết kế đồ họa CHUYÊN NGHIỆP</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="icon-wrapper">
                                    <div className="row item-center">
                                        <div className="col-lg-2">
                                            <img className="icon" src={require("../../../assets/img/icon6.png")}/>
                                        </div>
                                        <div className="col-lg-10">
                                            <p className="text-content">Được sự tin tưởng của nhiều cá nhân và doanh nghiệp</p>
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