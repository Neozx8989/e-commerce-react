import { Rating } from "react-simple-star-rating";

function AddingToCartsFunc(props) {
  return (
    <div>
      <div className="deepbass-cart">
        <img src={props.productImageUrl} alt="JBL bar 2.1 deep bass" />
        <div className="text-area">
          <h1>{props.name}</h1>
          <p>{props.price}</p>
          <div className="rate"><Rating></Rating></div>
          <button>
            {props.addbutton} <i class="bi bi-cart4"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

function NextAddToCartsFunc(props) {
  return (
    <div>
      <div className="next-carts">
        <img src={props.productImageUrl} alt="xbox game hand" />
        <div className="text-area">
          <h1>{props.name}</h1>
          <p>{props.price}</p>
          <div className="rate"><Rating></Rating></div>
        </div>
      </div>
    </div>
  );
}

export { AddingToCartsFunc, NextAddToCartsFunc };
