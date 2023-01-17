import "./App.css";
import { useState } from "react";
import ProductFunc from "./components/Product";
import products from "./Api";
import MainMenu from "./components/MainMenu";

function Navigation() {
    const [wishlist, setWishlist] = useState(0);

    const productList = products.map((product) => {
        return (
            <ProductFunc
                helpus={product.helpus}
                store={product.store}
                truck={product.truck}
                signin={product.signin}
                logoImageUrl={product.logoImageUrl}
                wishlist={wishlist}
                wishlisticon={product.wishlisticon}
            />
        );
    });

    return (
        <div className="god-cont">
            <div className="menu-container">
                {productList}
                <MainMenu />
            </div>
        </div>
    );
}
export default Navigation;