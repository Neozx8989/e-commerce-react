import { propTypes } from "react-bootstrap/esm/Image"

function LicenseCardFunc(props) {
    return(
        <div className="license-card-area">
            <p>{props.icon}</p>
            <div className="text-area">
                <h1>{props.title}</h1>
                <p>{props.price}</p>
            </div>
        </div>
    )
}

function CommentCardFunc(props) {
    return (
        <div className="comment-card-cont">
            <div className="comment-card-head">
                <img src={props.profileImageUrl} alt="Savannah Nguyen Picture" />
                <h1>{props.name}</h1>
            </div>
            <p>{props.comment}</p>
        </div>
    )
}


export { LicenseCardFunc , CommentCardFunc }