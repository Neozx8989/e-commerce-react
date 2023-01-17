

export default function DetailPageFunc (props) {
    return (
        <div className="detail-page-area">
           <img src={props.productImage} alt="Xbox-controler" />
           <div className='product-info-area'>
            <h1>{props.name}</h1>
            <h5>{props.price}</h5>
            <p>Availability: {props.check} in stock</p>
            <p>Hurry up! only 34 product left in stock!</p>
            <hr/>
            <div className='button-area'>
                <button>{props.add}</button>
                <button>{props.buy}</button>
            </div>

           </div>
        </div>
    )
}