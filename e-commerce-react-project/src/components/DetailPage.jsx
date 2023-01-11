
function DetailPageMenuFunc(props){
    return (
        <div className="detail-page-menu">
            <a href="#">{props.name}</a>
            <a href="#">{props.category}</a>
        </div>
    )
}

function ProductDetailFunc(props){
    <div className="detail-product">
        <div className="detail-main-picture">{props.productImage}</div>
        <div className="detail-more-pictures">
            {props.moreProductImage}
            {props.moreProductImage}
        </div>
        <h1>{props.name}</h1>
    </div>
}

function CustomerReviewsFunc(props){
    <div className="customer-review-area">

    </div>
}

function RelatesProductFunc(props){
    <div className="product-related">

    </div>
}

export {DetailPageMenuFunc , ProductDetailFunc , CustomerReviewsFunc, RelatesProductFunc}