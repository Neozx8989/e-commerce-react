function PopularProductsFunc(props) {
    return (
        <div>
            <div className="products-card">
                <img src={props.productImageUrl} alt="Speaker" />  
                <p>{props.title}</p>
            </div>
        </div>
    )
}

export default PopularProductsFunc