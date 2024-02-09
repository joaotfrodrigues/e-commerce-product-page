import React from "react";
import gsap from "gsap";

//IMAGES
import logo from "../images/logo.svg";
import iconCart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import deleteIcon from "../images/icon-delete.svg";
import menu from "../images/icon-menu.svg";

import productImage from "../images/image-product-1-thumbnail.jpg";

function Navbar(props) {

    window.addEventListener('click', function(event){  
        const cartElement = document.querySelector('.cartDisplay'); 
        if (!cartElement.contains(event.target)){
            if (cartElement.style.opacity === "1") {
            hideCart();
            }
        } 
    });

    window.addEventListener("resize", () => {
        if (document.querySelector(".cartDisplay").style.opacity === "1" ) hideCart();
    });
      

    function hideCart() {
        gsap.to(".cartDisplay", {
            opacity: 0,
            display: "none",
            duration: .5
        });
    }

    function showCart() {
        gsap.fromTo(".cartDisplay", {
            opacity: 0,
            display: "none"
        }, {
            opacity: 1,
            duration: .5,
            display: "block"
        });
    }

    function showMenu() {
        gsap.fromTo(".navbarMobile", {
            opacity: 0,
            display: "none"
        }, {
            opacity: 1,
            duration: .5,
            display: "block"
        });

        gsap.fromTo(".mobileContainer", {
            opacity: 0,
            display: "none",
            x: "-250px"
        }, {
            opacity: 1,
            display: "block",
            x: "0",
            duration: .5
        });

        document.querySelector("html").style.overflow = "hidden";
    }

    return (
        <nav className="navbar flex align-items-center margin-inline-auto">
            <div className="navbarLogo flex align-items-center">
                <img className="none pointer" onClick={showMenu} src={menu} alt="" />
                <a href="#credits"><img src={logo} alt="store logo" /></a>
            </div>
            <ul className="navbarNavigation flex">
                <li className="flex align-items-center relative">
                    <a className="paragraph color-gray" href="#credits">Collections</a>
                </li>
                <li className="flex align-items-center relative">
                    <a className="paragraph color-gray" href="#credits">Men</a>
                </li>
                <li className="flex align-items-center relative">
                    <a className="paragraph color-gray" href="#credits">Women</a>
                </li>
                <li className="flex align-items-center relative">
                    <a className="paragraph color-gray" href="#credits">About</a>
                </li>
                <li className="flex align-items-center relative">
                    <a className="paragraph color-gray" href="#credits">Contact</a>
                </li>
            </ul>
            <div className="navbarIcons flex align-items-center relative">
                <div className="navbarCart relative">
                    <img className="pointer" src={iconCart} alt="Shopping cart icon" onClick={showCart} />
                    { props.cart > 0 ? <p className="navCartQuantity absolute extra-small bold">{props.cart}</p> : null}
                </div>
                <div className="navbarAvatar pointer">
                    <img src={avatar} alt="Avatar from the user" />
                </div>
                <div className="cartDisplay none absolute">
                        <div className="cartTitle">
                            <p className="margin-inline-auto bold">Cart</p>
                        </div>
                        <div className="cartContent margin-inline-auto" style={{display: props.cart > 0 ? "block" : "none"}}>
                            <div className="cartItem flex align-items-center">
                                <div className="itemImage">
                                    <img src={productImage} alt="" />
                                </div>
                                <div className="itemInfo">
                                    <p className="paragraph color-gray">Fall Limited Edition Sneakers</p>
                                    <p className="paragraph color-gray">$125.00 x {props.cart} <strong>${ props.cart * 125 }.00</strong></p>
                                </div>
                                <div className="itemDelete">
                                    <img className="pointer" src={deleteIcon} alt="" onClick={() => props.setCart(0)} />
                                </div>
                            </div>
                            <div className="cartCheckout">
                                <a className="block paragraph bold" href="/">Checkout</a>
                            </div>
                        </div>
                        <div className="cartEmpty" style={{display: props.cart > 0 ? "none" : "block"}}>
                            <p className="color-gray bold paragraph">Your cart is empty.</p>
                        </div>
                    </div>
            </div>
        </nav>
    );
}

export default Navbar;