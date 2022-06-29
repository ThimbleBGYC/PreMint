import {useState} from "react";
import da from "../assets/dapp.png"

import g3 from "../assets/Suspect poster.png"
import g2 from "../assets/Rooms poster.png"
import g1 from "../assets/Murder weapons poster.png"

import gif1 from "../assets/Suspects.gif"
import gif2 from "../assets/Rooms.gif"
import gif3 from "../assets/Murder Weapons.gif"


export default function Header({isPreMint, showMintButton}) {
    const [qty, setQty] = useState(1)

    function counter(showMint) {
        return (
            <>
                <div className="nav-item">
                            <a className="nav-link" href="https://mint.boardgameyawnclub.xyz/">
                                <img src={da} alt="" className={"img-fluid"} width={500}/>
                            </a>
                </div>
            </>
        )
    }

    function PreMint() {
        return (
            <>
                <div className={"text-center text-white"}>
                    <p className={"h3 fw-light"}>Mint Date: June 29th, 2022</p>
                </div>
            </>
        )
    }

    function photos() {
        return (
            <>
                <div className={"photos-container"}>
                    <div>
                        <img src={g3} alt="NFT PHOTO" className={"img-fluid frame"}/>
                        <img src={gif1} alt="NFT PHOTO" className={"img-fluid gif"}/>
                    </div>
                    <div>
                        <img src={g2} alt="NFT PHOTO" className={"img-fluid frame"}/>
                        <img src={gif2} alt="NFT PHOTO" className={"img-fluid gif"}/>
                    </div>
                    <div>
                        <img src={g1} alt="NFT PHOTO" className={"img-fluid frame"}/>
                        <img src={gif3} alt="NFT PHOTO" className={"img-fluid gif"}/>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="min-vh-100 bg-black header-wrapper">
                <div className="container position-relative has-photos">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 mt-md-5 pt-md-5">
                            {!isPreMint && counter(showMintButton)}
                            {isPreMint && PreMint()}
                        </div>
                    </div>
                    {photos()}
                </div>
            </div>
        </>
    )
}