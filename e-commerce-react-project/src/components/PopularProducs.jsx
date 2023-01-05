export default function PopularProductsFunc(props) {
    return (
        <div className="products-area">
            <div className="products-header">
                <h1>{props.title}</h1>
                <div className="products-buttons">
                    <button>{props.item1}</button>
                    <button>{props.item2}</button>
                    <button>{props.item3}</button>
                    <button>{props.item4}</button>
                </div>
            </div>
        </div>
    )
}