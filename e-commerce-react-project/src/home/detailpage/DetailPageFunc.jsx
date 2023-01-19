export default function DetailPageFunc(props) {
  return (
    <div className="detail-page-area">
      <div className="detail-nav">
        <a href="#">Home</a>
        <a href="#">All category</a>
      </div>
      <div className="detail-products-area">
        <div className="product-image">
        <img src={props.productImage} alt="Xbox-controler" />
        <div className="other-product">
          <img src={props.productImage2} alt="Xbox-controler" />
          <img src={props.productImage2} alt="Xbox-controler" />
        </div>
        </div>

        <div className="product-info-area">
          <h1>{props.name}</h1>
          <h5>{props.price}</h5>
          <p>Availability: {props.check} in stock</p>
          <p>Hurry up! only 34 product left in stock!</p>
          <hr />
          <p className="product-color">Color: </p>
          <p className="product-size">
            Size:
            <div className="size-button-area">
              <button>30</button>
              <button>56</button>
              <button>42</button>
              <button>48</button>
            </div>
          </p>
          <p className="product-quantity">
            Quantity:
            <div className="quant-button-area">
              <button>-</button>
              <button>1</button>
              <button>-</button>
            </div>
          </p>
          <div className="button-area">
            <button>{props.add}</button>
            <button>{props.buy}</button>
            <a>{props.heart}</a>
          </div>
          <hr />
          <h6>Sku: 01133-9-9</h6>
          <h6>Category: 20%off, 49% Alex remote</h6>
          <h6>Share: Google Facebook What's up</h6>
        </div>
      </div>
      <div className="reviews-description">
        <div className="button-description-area">
            <button>Description</button>
            <button>Reviews</button>
        </div>
        <div className="customer-review-card">
            <h1>Customer reviews</h1>
            <p>No reviews yet</p>
            <a href="#">Write a review</a>
        </div>
      </div>
    </div>
  );
}
