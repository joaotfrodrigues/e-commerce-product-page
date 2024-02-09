import React from "react";

/* IMAGES */
import cart from "../images/icon-cart.svg";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";

function ProductInfo(props) {
    function changeQuantity(event) {
        if (event.target.name === "add") {
            props.setItemQuantity(props.itemQuantity + 1);
        } else {
            if (props.itemQuantity > 0) {
                props.setItemQuantity(props.itemQuantity - 1);
            }
        }
    }

    function addCart() {
        props.setCart(props.cart + props.itemQuantity);
        props.setItemQuantity(0);
    }

    return (
        <div className="productInfo">
            <p className="company paragraph bold">Sneaker Company</p>
            <h1 className="title">Fall Limited Edition Sneakers</h1>
            <p className="description paragraph color-gray">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            <div className="productPrice flex">
                <div className="newPrice flex align-items-center">
                    <p className="sub-title bold">$125.00</p>
                    <div className="small bold">50%</div>
                </div>
                <p className="paragraph bold">$250.00</p>
            </div>
            <div className="productActions flex">
                <div className="productQuantity flex align-items-center">
                    <img className="pointer" onClick={changeQuantity} name="remove" src={minus} alt="" />
                    <p className="bold">{props.itemQuantity}</p>
                    <img className="pointer" onClick={changeQuantity} name="add" src={plus} alt="" />
                </div>
                <div className="productAdd flex align-items-center pointer" onClick={addCart}>
                    <img src={cart} alt="" />
                    <p className="paragraph bold">Add to cart</p>
                </div>
            </div>
        </div>
    );
}

export default ProductInfo;