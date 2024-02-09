import React, { useState } from "react";
import gsap from "gsap";

//COMPONENTS
import Navbar from "./Navbar";
import Product from "./Product";
import Credits from "./Credits";

//IMAGES
import closeIcon from "../images/icon-close.svg";

function App() {
    const [itemQuantity, setItemQuantity] = useState(0);  
    const [cart, setCart] = useState(0);  

    function hideMenu() {
        gsap.fromTo(".navbarMobile", {
            opacity: 1,
            duration: .5,
            display: "block"
        }, {
            opacity: 0,
            display: "none"
        });

        gsap.fromTo(".mobileContainer", {
            opacity: 1,
            display: "block",
            x: "0",
        }, {
            opacity: 0,
            display: "none",
            x: "-250px",
            duration: .5
        });

        document.querySelector("html").style.overflow = "visible";
    }

    return (
        <div className="container">
            <div className="navbarMobile absolute none">
                <div className="mobileContainer none">
                    <div className="mobileClose margin-inline-auto flex align-items-center">
                        <img className="pointer" onClick={hideMenu} src={closeIcon} alt="" />
                    </div>
                    <ul className="mobileNavigation margin-inline-auto">
                        <li onClick={hideMenu}><a className="bold" href="#credits">Collections</a></li>
                        <li onClick={hideMenu}><a className="bold" href="#credits">Men</a></li>
                        <li onClick={hideMenu}><a className="bold" href="#credits">Women</a></li>
                        <li onClick={hideMenu}><a className="bold" href="#credits">About</a></li>
                        <li onClick={hideMenu}><a className="bold" href="#credits">Contact</a></li>
                    </ul>
                </div>
            </div>
            <Navbar 
                cart={cart}
                setCart={setCart}
                itemQuantity={itemQuantity}
            />
            <section className="wrapper margin-inline-auto">
                <Product
                    itemQuantity={itemQuantity}
                    setItemQuantity={setItemQuantity}
                    cart={cart}
                    setCart={setCart}
                />
                <Credits />
            </section>
        </div>
    );
}

export default App;