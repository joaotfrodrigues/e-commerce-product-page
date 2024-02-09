import React from "react";
import ProductSwiper from "./ProductSwiper";
import ProductInfo from "./ProductInfo";

function Product(props) {
    return (
        <section className="productSection margin-inline-auto flex align-items-center">
            <ProductSwiper />
            <ProductInfo
                itemQuantity={props.itemQuantity}
                setItemQuantity={props.setItemQuantity} 
                cart={props.cart}
                setCart={props.setCart}
            />
        </section>
    );
}

export default Product;