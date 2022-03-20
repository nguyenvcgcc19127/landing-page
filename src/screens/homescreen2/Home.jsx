import FirstPage from "../homescreen1/FirstPage/FirstPage";
import Logo from "../homescreen1/Logo/Logo";
import Footer from "../homescreen1/Footer/Footer";
import SecondPage from "../homescreen1/SecondPage/SecondPage";
import ThirdPage from "../homescreen1/ThirdPage/ThirdPage";
import Slideshow from "../homescreen1/SlideShow/SlideShow";
import Sale from "../homescreen1/Sale/Sale";

export default function Home(){
    return(
        <div>
            <div>
                <FirstPage></FirstPage>
            </div>
                
            <div>
               <Logo></Logo>
            </div>

            <div>
                <SecondPage></SecondPage>
            </div>

            <Slideshow></Slideshow>

            <div>
                <ThirdPage></ThirdPage>
            </div>

            <div>
                <Sale></Sale>
            </div>
            
            <div>
                <Footer></Footer>
            </div>
            
        </div>
    )
}