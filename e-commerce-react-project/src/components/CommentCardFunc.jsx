import { propTypes } from "react-bootstrap/esm/Image"

export default function CommentCardFunc(props) {
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

