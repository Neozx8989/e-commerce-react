function DetailPageMenu(props){
    return (
        <div className="detail-page-menu">
            <div>{props.name}<i class="bi bi-arrow-bar-right"></i>
</div>
            <div>{props.category}<i class="bi bi-arrow-bar-right"></i>
</div>
        </div>
    )
}

function ProductDetail(props){
    return (
    <div className="detail-product">
        <img src={props.productImage}></img>
        <div className="right-area">
            <h1>{props.name}</h1>
            <p>{props.price}</p>
            <div className="aval">Availability: <p className="availab">{props.status} in stock</p></div>
        </div>
    </div>
    )
}

function CustomerReviews(props){
    return (
    <div className="customer-review-area">

    </div>
    )
}

function RelatesProduct(props){
    return (
    <div className="product-related">

    </div>
    )
}

export {DetailPageMenu , ProductDetail , CustomerReviews, RelatesProduct}