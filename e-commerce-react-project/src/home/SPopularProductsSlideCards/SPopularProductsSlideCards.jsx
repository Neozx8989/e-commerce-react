function SPopularProductsSlideCardFunc(props) {
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
export {SPopularProductsSlideCardFunc} 