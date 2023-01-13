function DetailPageMenu(props){
    return (
        <div className="detail-page-menu">
            {props.name}
            {props.category}
        </div>
    )
}

function ProductDetail(props){
    <div className="detail-product">
        {props.productImage}
        <button>{props.addbutton}</button>
    </div>
}

function CustomerReviews(props){
    <div className="customer-review-area">

    </div>
}

function RelatesProduct(props){
    <div className="product-related">

    </div>
}

export {DetailPageMenu , ProductDetail , CustomerReviews, RelatesProduct}