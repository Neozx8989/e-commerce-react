export default function ProductsCardFunc(props) {
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