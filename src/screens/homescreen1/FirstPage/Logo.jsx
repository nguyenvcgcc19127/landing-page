import React from "react";
import './logo.css';

export default function Logo(){
    return(
        <div className="logo-wrapper">
            <h1>được sự tin tưởng và ủng hộ của hơn 99+ thương hiệu lớn nhỏ</h1>
            <div className="bg-logo">
                <div className="row">
                    <div className="col-lg">
                        <img className="img-logo-1 logo-effect" src={require("../../../assets/img/hgv.png")}/>
                    </div>
                    <div className="col-lg">
                        <img className="img-logo-2 logo-effect" src={require("../../../assets/img/logo-1.png")}/>
                    </div>
                    <div className="col-lg">
                        <img className="img-logo-1 logo-effect" src={require("../../../assets/img/vinamilk.png")}/>
                    </div>
                    <div className="col-lg">
                        <img className="img-logo-2 logo-effect" src={require("../../../assets/img/duynguyenpro.png")}/>
                    </div>
                    <div className="col-lg">
                        <img className="img-logo-1 logo-effect" src={require("../../../assets/img/vtv.png")}/>
                    </div>
                </div>
            </div>
        </div>
    )
}