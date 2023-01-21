export default function CartFunc(props) {
  return (
    <div className="cart-container">
      <div className="cart-nav">
        <a href="#">Home</a>
        <a href="#">All category</a>
      </div>

      <div className="cart-zone">
        <div className="cart-product-list-area">
          <div className="header">
            <h1>Product</h1>
            <div className="pqs">
              <h1>Price</h1>
              <h1>Quantity</h1>
              <h1>Subtotal</h1>
            </div>
          </div>

          <div className="products-list-area">
            <img src={props.productImage1} alt="xbox green controler" />
            <div className="product-info-area">
              <h1>{props.productName}</h1>
              <p>Color: Green</p>
              <p>Size: 30</p>
            </div>
            <h3>{props.price}</h3>
            <div className="quantity-area-btn">
              <button>-</button>
              <button>1</button>
              <button>+</button>
            </div>
            <h3>{props.price}</h3>
          </div>

          <div className="products-list-area">
            <img src={props.productImage2} alt="xbox black controler" />
            <div className="product-info-area">
              <h1>{props.productName}</h1>
              <p>Color: Black</p>
              <p>Size: 30</p>
            </div>
            <h3>{props.price}</h3>
            <div className="quantity-area-btn">
              <button>-</button>
              <button>1</button>
              <button>+</button>
            </div>
            <h3>{props.price}</h3>
          </div>
          <div className="buttons-zone">
            <button>{props.shoppingBtn}</button>
            <button>{props.updateBtn}</button>
            <button>{props.clearBtn}</button>
          </div>
        </div>

        <div className="cart-total-list-area">
          <h1>Cart total</h1>
          <div className="sub-total">
            <p>Subtotal</p>
            <p>$ 23,20</p>
          </div>
          <div className="form-zone-area">
            <input
              type="number"
              name="code"
              placeholder="Enter coupon code"
            ></input>
            <button>Apply</button>
          </div>
          <select>
            <option>County</option>
            <option>none</option>
            <option>none</option>
          </select>
          <div className="total-ammount">
            <p>Total amount</p>
            <p>$ 23,20</p>
          </div>
          <button className="checkout">{props.checkoutBtn}</button>
        </div>
      </div>
    </div>
  );
}
