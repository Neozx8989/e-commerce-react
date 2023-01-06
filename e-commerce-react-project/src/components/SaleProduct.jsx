export default function SaleProductFunc(props) {
    return (
        <div>
            <div className="laptop-picture">
                <div className="laptop-text-area">
                <button>{props.newproductbutton}</button>
                <h1>{props.title}</h1>
                <p>{props.displaysize}</p>
                <button>{props.shopproductbutton}</button>
                </div>
            </div>
        </div>
    )
}