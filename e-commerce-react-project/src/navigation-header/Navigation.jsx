import "../App.css";
import { useState } from "react";
import ProductFunc from "./ProductFunc";
import products from "./Api";
import MainMenu from "./MainMenu";


function Navigation(props) {

    const productList = products.map((product) => {
        return (
            <ProductFunc
                helpus={product.helpus}
                store={product.store}
                truck={product.truck}
                signin={product.signin}
                logoImageUrl={product.logoImageUrl}
                addCard={props.addCard}
                setAddCard={props.setAddCard}
            />
        );
    });

    return (
        <div className="god-cont">
            <div className="menu-container">
                {productList}
                <MainMenu/>
            </div>
        </div>
    );
}
export default Navigation;