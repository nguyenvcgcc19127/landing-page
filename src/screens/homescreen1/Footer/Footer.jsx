import React, { useEffect } from "react";
import './footer.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useState } from "react";
import isEmail from "validator/lib/isEmail";
import { useNavigate } from 'react-router-dom';

export default function Footer(){

    // States for registration
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [major, setMajor] = useState('');
 
    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [errMessage, setErrMessage] = useState({})
    // const [successMessage, setSuccessMessage] = useState("Ban da dang ki thanh cong")
    
    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };
    
    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    // Handling the phone change
    const handlePhone = (e) => {
        setPhone(e.target.value);
        setSubmitted(false);
    };
    
    const handleMajor = (e) => {
        setMajor(e.target.value);
        setSubmitted(false);
    };
    
    // Handling the form submission
    const validateAll = () => {
        const msg = {}
        console.log(name, email, phone, major)
        if (name === '') {
            msg.name = "Vui lòng nhập họ và tên!"
        } if (email === '') {
            msg.email = "Vui lòng nhập email!"
        } else if (!isEmail(email)) {
            msg.email = "Email của bạn không đúng!"
        } if (phone === '') {
            msg.phone = "Vui lòng nhập số điện thoại!"
        } else if (phone.length < 10 || phone.length >= 11){
            msg.phone = "Số điện thoại của bạn không đúng!"
        } if (major === ""){
            msg.major = "Vui lòng chọn lĩnh lực!";
        }

        setErrMessage(msg)
        if (Object.keys(msg).length > 0) return false
        else return true
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        const isValid = validateAll(e)
        if (!isValid) return 
        setSubmitted(true)
    }
    
    return(
        <div className="footer-wrapper">
            <div className="wrapForm">
                <div className="row">
                    <div className="col-lg-6">
                        <h1>đăng ký</h1>
                        <div className="wrapper">
                            <form className="form-wrapper" onSubmit={handleSubmit}>
                                <div className="name">
                                    <input className="input" onChange={handleName}
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={name}
                                        placeholder="Họ và tên" />
                                    <p className="error" style={{color: "red"}}>{ errMessage.name }</p>
                                </div>

                                <div className="phone">
                                    <input className="input" onChange={handlePhone}
                                        name="phone"
                                        id="phone"
                                        value={phone}
                                        placeholder="Số điện thoại" />
                                    <p className="error" style={{color: "red"}}>{ errMessage.phone }</p>
                                </div>

                                <div className="email">
                                    <input className="input"  onChange={handleEmail} 
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        placeholder="email@gmail.com" />
                                    <p className="error" style={{color: "red"}}>{ errMessage.email }</p>
                                </div>
                                
                                <div className="major">
                                    <select className="select" onChange={handleMajor} 
                                        name="major"
                                        id="major"
                                       
                                        required>
                                        <option value="" disabled selected>Lĩnh vực</option>
                                        <option value="volvo">Lĩnh vực xây dựng</option>
                                        <option value="saab">Lĩnh vực thiết kế nội thất</option>
                                        <option value="opel">Lĩnh vực trang sức đá quý</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                    <p className="error" style={{color: "red"}}>{ errMessage.major }</p>
                                </div>

                                <div className="package">
                                    <select className="select"  
                                        name="package"
                                        id="package"
                                        
                                        required>
                                        <option value="" disabled selected>Gói</option>
                                        <option value="propersonal">PRO PERSONAL</option>
                                        <option value="procompany">PRO COMPANY</option>
                                    </select>
                                    <p className="error" style={{color: "red"}}> </p>
                                </div>
                                <button href="" className="submit" onSubmit={handleSubmit}>Đăng ký</button>
                                
                            </form>
                            
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="wrapContact">
                            <h1>liên hệ</h1>
                            <img className="img-logo" 
                                src={require("../../../assets/img/PNG.png")}/>
                            <div className="contact">
                                <p>Công ty TNHH DESIGN24</p>
                                <p>0784.888.009 - 0704.888.009</p>
                                <p>www.design24.vn</p>
                                <p>TP. HCM: 302A Nguyễn Thượng Hiển, phường 5, quận Phú Nhuận</p>
                                <p>TP. Cần Thơ: 661F/29 khu vực Bình Yên A, phường Long Hòa, quận Bình Thủy</p>
                            </div>
                            <img className="img-lg-ft" src={require("../../../assets/img/bct.png")}/>
                            <div className="row">
                                <div className="icon-sn">
                                    <div className="col-lg-3">
                                        <img className="sn" src={require("../../../assets/img/fb.png")}/>
                                    </div>
                                    <div className="col-lg-3">
                                        <img className="sn" src={require("../../../assets/img/ig.png")}/>
                                    </div>
                                    <div className="col-lg-3">
                                        <img className="sn" src={require("../../../assets/img/be.png")}/>
                                    </div>
                                    <div className="col-lg-3">
                                        <img className="sn" src={require("../../../assets/img/youtube.png")}/>
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