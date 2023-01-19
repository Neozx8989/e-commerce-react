import AliceCarousel from "react-alice-carousel";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";
import DetailPageApp from "./detailpage/DetailPageApp";

function AdverstingPopularFunc(props) {
  return (
    <div className="product-area">
      <div className="products-card">
        <img src={props.productImageUrl} />
        <div className="product-card-text">
          <h1>{props.title}</h1>
          <p>{props.item}</p>
        </div>
      </div>
    </div>
  );
}

function AdverstingFunc(props) {
  return (
    <AliceCarousel autoPlay autoPlayInterval="5000">
      <div className="adversting-area">
        <div className="left-area">
          <h1>Iphone 13 Case</h1>
          <div className="shopview">
            <button>{props.buttonshop}</button>
            <button>{props.buttonview}</button>
          </div>
        </div>
        <img
          src="http://cdn.shopify.com/s/files/1/0037/7798/6630/products/71613lct0PL._SL1500_9725f828-f9f0-4678-928d-9f06f522f217.jpg?v=1673089567"
          alt="Canon camera"
        />
      </div>
      <div className="adversting-area">
        <div className="left-area">
          <h1>Canon CDN 300</h1>
          <div className="shopview">
            <button>{props.buttonshop}</button>
            <button>{props.buttonview}</button>
          </div>
        </div>
        <img
          src="https://i1.adis.ws/i/canon/cr-n300-bk-frt-04_full-ptz-range_02_ff9db74d048540108262c426a3ad2678"
          alt="Canon camera"
        />
      </div>
      <div className="adversting-area">
        <div className="left-area">
          <h1>PS5 controler</h1>
          <div className="shopview">
            <button>{props.buttonshop}</button>
            <button>{props.buttonview}</button>
          </div>
        </div>
        <img
          src="https://cdn.shopify.com/s/files/1/2231/0539/products/PlayStation-5-DualSense-PS5-Custom-Controller-Hyper-Space-Edition_700x700.png?v=1657532806"
          alt="Canon camera"
        />
      </div>
      <div className="adversting-area">
        <div className="left-area">
          <h1>Apple AirPods Max</h1>
          <div className="shopview">
            <button>{props.buttonshop}</button>
            <button>{props.buttonview}</button>
          </div>
        </div>
        <img
          src="https://ph-test-11.slatic.net/p/75fa70a12d52a377665d93c4bc210fee.jpg"
          alt="Canon camera"
        />
      </div>
      <div className="adversting-area">
        <div className="left-area">
          <h1>Iphone 14 Pro</h1>
          <div className="shopview">
            <button>{props.buttonshop}</button>
            <button>{props.buttonview}</button>
          </div>
        </div>
        <img
          src="https://m.media-amazon.com/images/I/71MIxZaKqgL.jpg"
          alt="Canon camera"
        />
      </div>
    </AliceCarousel>
  );
}

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

function ProductsCardFunc(props) {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  function handleCart() {
    props.setWishlist(props.wishlist);
    console.log(props.wishlist);
  }

  return (
    <div className="products-card-area">
      {values.map((v, idx) => (
        <div key={idx} onClick={() => handleShow(v)}>
          <Link to={"/detailpage"}>
            <img src={props.productImageUrl} />
          </Link>
          {typeof v === "string" && `below ${v.split("-")[0]}`}
        </div>
      ))}
      <div className="product-info">
        <div>
          <Link to={`/detailpage/${props.id}`}>
            {" "}
            <h4>{props.title}</h4>
          </Link>
          <h5>{props.price}</h5>
          <Rating>
            <p className="icons"></p>
          </Rating>
        </div>
        <div className="basket-add">
          <button onClick={handleCart}>{props.basket}</button>
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
  AdverstingPopularFunc,
  AdverstingFunc,
  SponsereFunc,
  LatestNewsFunc,
  LatestNewsCardFunc,
  PopularProductsFunc,
  ProductsCardFunc,
};
