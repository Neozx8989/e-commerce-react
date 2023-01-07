import AliceCarousel from 'react-alice-carousel'

export default function AdverstingFunc(props) {
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
                <h1>Samsun Laptop</h1>
                <div className="shopview">
                    <button>{props.buttonshop}</button>
                    <button>{props.buttonview}</button>
                </div>
            </div>
            <img src="https://www.pngkit.com/png/full/824-8241893_samsung-notebook-9-best-samsung-laptop-2018.png" alt="Canon camera" />
        </div>
        <div className="adversting-area">
            <div className="left-area">
                <h1>PS5 gamehand</h1>
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
                <h1>Iphone 13 Pro Max</h1>
                <div className="shopview">
                    <button>{props.buttonshop}</button>
                    <button>{props.buttonview}</button>
                </div>
            </div>
            <img src='https://assets.stickpng.com/images/61d2f85b92b57c0004c64745.png' alt="Canon camera" />
        </div>
        </AliceCarousel>
    )
}