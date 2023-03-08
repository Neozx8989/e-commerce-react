import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

function TPopularProductsCardFunc(props) {
    console.log(props.addCard)
  
    function addClick (){
      props.setAddCard(props.addCard + 1)
    }
  
    return (
      <div className="products-card-area">   
            <Link to={"/detailpage"}>
              <img src={props.productImageUrl} />
            </Link>
        <div className="product-info">
          <div>
            <h4>{props.title}</h4>
            <h5>{props.price}</h5>
            <Rating>
              <p className="icons"></p>
            </Rating>
          </div>
          <div className="basket-add">
            <button onClick={addClick}>{props.basket}</button>
          </div>
        </div>
      </div>
    );
  }
export {TPopularProductsCardFunc}