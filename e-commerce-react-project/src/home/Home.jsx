import "../App.css";
import "../home/FPopularproducts/FPopularProducts.css";
import "../home/SPopularProductsSlideCards/SPopularProductsSlideCards.css";
import "../home/TPopularProductsCards/TPopularProductsCards.css";
import "../home/SalestProduct/SalestProduct.css";
import "../home/NextPopularProductsCards/NextPopularProductsCards.css";
import "../home/LatestNews/LatestNews.css";

import AliceCarousel from "react-alice-carousel";

import {FPopularProductsAPI} from "../home/FPopularproducts/FPopularProdcutsAPI"
import {FPopularProductsFunc} from "../home/FPopularproducts/FPopularProducts"

import {SPopularProductsSlideCardsAPI} from "../home/SPopularProductsSlideCards/SPopularProductsSlideCardsAPI"
import {SPopularProductsSlideCardFunc} from "../home/SPopularProductsSlideCards/SPopularProductsSlideCards"

import {TPopularProductsCardAPI} from "../home/TPopularProductsCards/TPopularProductsCardsAPI"
import {TPopularProductsCardFunc} from "../home/TPopularProductsCards/TPopularProductsCards"

import { SalestProductAPI } from "./SalestProduct/SalestProductAPI";
import { SalestProductFunc } from "./SalestProduct/SalestProduct";

import { AddCartsAPI, NextAddCartsAPI } from "./NextPopularProductsCards/NextPopularProductsCardsAPI";
import { AddingToCartsFunc, NextAddToCartsFunc } from "../home/NextPopularProductsCards/NextPopularProductsCards";

import { LatestNewsDataAPI, NewsCardDataAPI } from "./LatestNews/LatestNewsAPI";
import { LatestNewsCardFunc, LatestNewsFunc } from "./LatestNews/LatestNews";

import {PopularProducts} from "../home/data/AdverstinPopular";
import {PopularProductsFunc} from "../home/AdverstingPopular";

import {SponserData} from "../home/data/LatestNews";
import {SponsereFunc} from "../home/LatestNewsFunc";

import { LicensesData, CommentCard } from "./data/Licenses";
import { LicenseCardFunc, CommentCardFunc } from "./LicenseCard";

function Home(props) {
  const FPopularProductVAR = FPopularProductsAPI.map((advers) => {
    return (
      <FPopularProductsFunc
        title={advers.title}
        buttonshop={advers.buttonshop}
        buttonview={advers.buttonview}
        adverstingImageUrl={advers.adverstingImageUrl}
      />
    );
  });

  const SPopularProductsSlideCardsVAR = SPopularProductsSlideCardsAPI.map((product) => {
    return (
      <SPopularProductsSlideCardFunc
        addCard={props.addCard}
        setAddCard={props.setAddCard}
        productImageUrl={product.productImageUrl}
        title={product.title}
        item={product.item}
      />
    );
  });

  const PopularProductsVAR = PopularProducts.map((products) => {
    return (
      <PopularProductsFunc
        title={products.title}
        item1={products.item1}
        item2={products.item2}
        item3={products.item3}
        item4={products.item4}
      />
    );
  });

  const TPopularProductsCardVAR = TPopularProductsCardAPI.map((product) => {
    return (
      <TPopularProductsCardFunc
        productImageUrl={product.productImageUrl}
        title={product.title}
        price={product.price}
        rating={product.rating}
        basket={product.basket}
        addCard={props.addCard}
        setAddCard={props.setAddCard}
      />
    );
  });

  const SalestProductVAR = SalestProductAPI.map((product) => {
    return (
      <SalestProductFunc
        salelaptop={product.salelaptop}
        newproductbutton={product.newproductbutton}
        title={product.title}
        displaysize={product.displaysize}
        shopproductbutton={product.shopproductbutton}
      />
    );
  });

  const AddToCartVAR = AddCartsAPI.map((product) => {
    return (
      <AddingToCartsFunc
        productImageUrl={product.productImageUrl}
        name={product.name}
        price={product.price}
        ratingstar={product.ratingstar}
        addbutton={product.addbutton}
      />
    );
  });

  const NextAddToCartVAR = NextAddCartsAPI.map((product) => {
    return (
      <NextAddToCartsFunc
        productImageUrl={product.productImageUrl}
        name={product.name}
        price={product.price}
        ratingstar={product.ratingstar}
      />
    );
  });

  const LicenseCardArea = LicensesData.map((product) => {
    return (
      <LicenseCardFunc
        icon={product.icon}
        title={product.title}
        price={product.price}
      />
    );
  });

  const CommentCardArea = CommentCard.map((card) => {
    return (
      <CommentCardFunc
        profileImageUrl={card.profileImageUrl}
        name={card.name}
        comment={card.comment}
      />
    );
  });

  const SponserCompanyArea = SponserData.map((logos) => {
    return <SponsereFunc logoImageUrl={logos.logoImageUrl} />;
  });

  const LatestNewsVAR = LatestNewsDataAPI.map((latestnews) => {
    return (
      <LatestNewsFunc title={latestnews.title} allnews={latestnews.allnews} />
    );
  });

  const LatestNewsCardVAR = NewsCardDataAPI.map((card) => {
    return (
      <LatestNewsCardFunc
        ImageUrl={card.ImageUrl}
        yearOfDate={card.yearOfDate}
        title={card.title}
        text={card.text}
        director={card.director}
      />
    );
  });

  return (
    <div className="god-cont">

        {/* Hamgiin ehnii product slide heseg */}
        <div className="carousel-adversting">{ FPopularProductVAR}</div>

        <div className="carousel-three-cards">
          <AliceCarousel>

            {/* 2dh 3card-tai slide heseg */}
            <div className="three-card">{SPopularProductsSlideCardsVAR}</div>

          </AliceCarousel>
        </div>

        {/* Product uudiig filter hiih buttontai heseg */}
        {PopularProductsVAR}

        <AliceCarousel autoPlay autoPlayInterval="3000">

          {/* 8 product card haragdah heseg */}
          <div className="all-products">{TPopularProductsCardVAR}</div>
          
        </AliceCarousel>

        {/* Hymdral zaralsan laptop adversting heseg */}
        {SalestProductVAR}

        <div className="all-adding-cart">

          {/* 4dh product carduudin heseg 3 card bga */}
          {AddToCartVAR}
          <div className="next-adding-cart">{NextAddToCartVAR}</div>

        </div>

        <div className="license-card-cont">{LicenseCardArea}</div>

        <AliceCarousel autoPlay autoPlayInterval="3000">

          {/* Hereglechnarin setgegdeltei card heseg */}
          <div className="comment-card-area-cont">{CommentCardArea}</div>

        </AliceCarousel>

        <div className="sponser-company-logo">{SponserCompanyArea}</div>

        <div className="latest-news-zone">
          {/* Svvlin shine medee medeellin cardud */}
          {LatestNewsVAR}
          
          <AliceCarousel autoPlay autoPlayInterval="3000">
            <div className="card-news-zone">{LatestNewsCardVAR}</div>
          </AliceCarousel>
        </div>
    </div>
  );
}
export default Home;
