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

export default AdverstingPopularFunc