export default function AdverstingFunc(props) {
    return(
        <div className="adversting-area">
            <div className="left-area">
                <h1>{props.title}</h1>
                <div className="shopview">
                    <button>{props.buttonshop}</button>
                    <button>{props.buttonview}</button>
                </div>
            </div>
            <img src={props.adverstingImageUrl} alt="Canon camera" />
        </div>
    )
}