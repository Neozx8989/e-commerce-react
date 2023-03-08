import AliceCarousel from "react-alice-carousel";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";

function PopularProductsFunc(props) {
  return (
    <div className="products-area">
      <div className="products-header">
        <h1>{props.title}</h1>
        <div className="products-buttons">
          <button>{props.item1}</button>
          <button>{props.item2}</button>
          <button>{props.item3}</button>
          <button>{props.item4}</button>
        </div>
      </div>
    </div>
  );
}

function SponsereFunc(props) {
  return (
    <div className="sponser-area">
      <img src={props.logoImageUrl} alt="Sponser Company's Logo" />
    </div>
  );
}

function LatestNewsFunc(props) {
  return (
    <div className="latest-news-view-all">
      <h1>{props.title}</h1>
      <a href="#">{props.allnews}</a>
    </div>
  );
}

function LatestNewsCardFunc(props) {
  return (
    <div className="lates-news-card">
      <img src={props.ImageUrl} alt="" />
      <div className="news-text-area">
        <h3>{props.yearOfDate}</h3>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <br />
        <p>{props.director}</p>
      </div>
    </div>
  );
}

export {
  SponsereFunc,
  LatestNewsFunc,
  LatestNewsCardFunc,
  PopularProductsFunc,
};
