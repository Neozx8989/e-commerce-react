import "./App.css";
import AliceCarousel from "react-alice-carousel";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";

import ProductFunc from "./Product";
import products from "./Api";
import MainMenu from "./components/MainMenu";

import { detailPageMenuData , productDetailData , customerReviewsData , relatesProductData } from "./data/detailPage";
import { DetailPageMenuFunc , ProductDetailFunc , CustomerReviewsFunc, RelatesProductFunc} from "./components/DetailPage";

import { FooterContactData, FooterBottomData, FooterTermsData,} from "./data/Footer";
import { FooterFunc, FooterBottomFunc, FooterTermsFunc,} from "./components/FooterFunc";

function DetailPageApp() {
  const productList = products.map((product) => {
    return (
      <ProductFunc
        helpus={product.helpus}
        store={product.store}
        truck={product.truck}
        signin={product.signin}
        logoImageUrl={product.logoImageUrl}
      />
    );
  });

  const pageMenuArea = detailPageMenuData.map((menu)=> {
    return (
      <DetailPageMenuFunc 
        name={menu.name}
        category={menu.category}
      />
    )
  })

  const ProductDetailArea = productDetailData.map((products)=> {
    return (
      <ProductDetailFunc 
        productImage={products.productImage}
        moreProductImage={products.moreProductImage}
        name={products.name}
      />
    )
  })

  const FooterContactArea = FooterContactData.map((info) => {
    return (
      <FooterFunc
        title={info.title}
        email={info.email}
        contactinfo={info.contactinfo}
      />
    );
  });

  const FooterBottomArea = FooterBottomData.map((info) => {
    return (
      <FooterBottomFunc logoImageUrl={info.logoImageUrl} street={info.street} />
    );
  });

  const FooterTermsArea = FooterTermsData.map((info) => {
    return (
      <FooterTermsFunc
        name={info.name}
        product={info.product}
        product2={info.product2}
        product3={info.product3}
        product4={info.product4}
        product5={info.product5}
      />
    );
  });

  return (
    <div className="god-cont">
      <div className="menu-container">
        {productList}
        <MainMenu />

        <div className="detail-page-cont">
          {pageMenuArea}
        </div>
        <div className="products-detail-cont">
          {ProductDetailArea}
        </div>

        <div className="footer-zone">
          {FooterContactArea}
          <div className="footer-bottom-zone">
            {FooterBottomArea}
            {FooterTermsArea}
          </div>
        </div>
      </div>
    </div>
  );
}
export default DetailPageApp;
