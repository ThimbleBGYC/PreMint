import Navigation from "./Navigation/Navigation";
import Header from "./Header/Header";
import Suspects from "./Carousel/Suspects";
import About from "./About/About";
import {useState} from "react";
import Footer from "./Footer/Footer";

function App() {
    const [preMint, setPreMint] = useState(false) //set this to control mint-status
    const [showMint, setShowMint] = useState(true) //set this to control mint-button

    return (
        <>
            <Navigation/>
            <Header isPreMint={preMint} showMintButton={showMint}/>
            <div className={"blood"}>
                <Suspects/>
                <About/>
            </div>
            <Footer/>



           




        </>
    );
}

export default App;
