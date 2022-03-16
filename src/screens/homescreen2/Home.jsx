import FirstPage from "../homescreen1/FirstPage/FirstPage";
import Logo from "../homescreen1/FirstPage/Logo";
import SecondPage from "../homescreen1/SecondPage/SecondPage";
import ThirdPage from "../homescreen1/ThirdPage/ThirdPage";
import './home.css';

export default function Home(){
    return(
        <div className="center-relative">
            {/* <div>
                <FirstPage></FirstPage>
            </div>
                
            <div>
               <Logo></Logo>
            </div> */}

            <div>
                <SecondPage></SecondPage>
            </div>

            {/* <div>
                <ThirdPage></ThirdPage>
            </div> */}
            
            
        </div>
    )
}