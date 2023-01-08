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

export {PopularProductsFunc , ProductsCardFunc}