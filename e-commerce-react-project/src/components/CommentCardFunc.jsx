import { propTypes } from "react-bootstrap/esm/Image"

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

function CommentCardFunc2(props) {
    return (
        <div className="comment-card-cont">
            <div className="comment-card-head">
                <img src={props.profileImageUrl} alt="Esther Howard picture" />
                <h1>{props.name}</h1>
            </div>
            <p>{props.comment}</p>
        </div>
    )
}

function CommentCardFunc3(props) {
    return (
        <div className="comment-card-cont">
            <div className="comment-card-head">
                <img src={props.profileImageUrl} alt="Esther Howard picture" />
                <h1>{props.name}</h1>
            </div>
            <p>{props.comment}</p>
        </div>
    )
}

export {CommentCardFunc , CommentCardFunc2 , CommentCardFunc3}