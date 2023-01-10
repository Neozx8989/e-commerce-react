import AliceCarousel from 'react-alice-carousel'

function AdverstingPopularFunc(props) {
    return (
        <div className="product-area">
            <div className="products-card">
                <img src={props.productImageUrl} alt="Speaker" />
                <div className="product-card-text">    
                    <h1>{props.title}</h1>
                    <p>{props.item}</p>
                </div>  
            </div>
        </div>
        
    )
}

function AdverstingFunc(props) {
    return(
        <AliceCarousel autoPlay autoPlayInterval="3000">
        <div className="adversting-area">
            <div className="left-area">
                <h1>{props.title}</h1>
                <div className="shopview">
                    <button>{props.buttonshop}</button>
                    <button>{props.buttonview}</button>
                </div>
            </div>
            <img src={props.adverstingImageUrl} alt="Canon camera" />
        </div>
        <div className="adversting-area">
            <div className="left-area">
                <h1>Sony Camera</h1>
                <div className="shopview">
                    <button>{props.buttonshop}</button>
                    <button>{props.buttonview}</button>
                </div>
            </div>
            <img src="https://pngimg.com/d/video_camera_PNG7854.png" alt="Canon camera" />
        </div>
        <div className="adversting-area">
            <div className="left-area">
                <h1>PS5 controler</h1>
                <div className="shopview">
                    <button>{props.buttonshop}</button>
                    <button>{props.buttonview}</button>
                </div>
            </div>
            <img src='https://www.pngall.com/wp-content/uploads/5/PS5-Controller-PNG-Image.png' alt="Canon camera" />
        </div>
        <div className="adversting-area">
            <div className="left-area">
                <h1>Head Phone</h1>
                <div className="shopview">
                    <button>{props.buttonshop}</button>
                    <button>{props.buttonview}</button>
                </div>
            </div>
            <img src='https://www.freepnglogos.com/uploads/headphones-png/headphones-hublot-and-monster-announce-inspiration-hublot-luxury-35.png' alt="Canon camera" />
        </div>
        <div className="adversting-area">
            <div className="left-area">
                <h1>Iphone 14 Pro</h1>
                <div className="shopview">
                    <button>{props.buttonshop}</button>
                    <button>{props.buttonview}</button>
                </div>
            </div>
            <img src='https://m.media-amazon.com/images/I/71MIxZaKqgL.jpg' alt="Canon camera" />
        </div>
        </AliceCarousel>
    )
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
    )
}

function ProductsCardFunc(props) {
    return (
        <div className="products-card-area">
            <img src={props.productImageUrl} alt="canon camera" />
            <div className="product-info">
                <div>
                    <h4>{props.title}</h4>
                    <h5>{props.price}</h5>
                    <p className="icons">{props.rating}</p>
                </div>
                <p>{props.basket}</p>
            </div>
        </div>
    )
}

function SponsereFunc(props) {
    return (
        <div className="sponser-area">
            <img src={props.logoImageUrl} alt="Sponser Company's Logo" />
        </div>
    )
}

function LatestNewsFunc(props) {
    return (
        <div className="latest-news-view-all">
            <h1>{props.title}</h1>
            <a href="#">{props.allnews}</a>
        </div>
    )
}

function LatestNewsCardFunc(props) {
    return(
        <div className="lates-news-card">
            <img src={props.ImageUrl} alt="" />
            <div className="news-text-area">
                <h3>{props.yearOfDate}</h3>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <br/>
                <p>{props.director}</p>
            </div>
        </div>
        
    )
}

export {AdverstingPopularFunc , AdverstingFunc , SponsereFunc , LatestNewsFunc , LatestNewsCardFunc, PopularProductsFunc , ProductsCardFunc}