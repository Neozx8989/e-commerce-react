function LatestNewsFunc(props) {
    return (
        <div className="latest-news-view-all">
            <h1>{props.title}</h1>
            <a href="#">{props.allnews}</a>
        </div>
    )
}

function LatestNewsCardFunc(props) {
    return(
        <div className="lates-news-card">
            <img src={props.ImageUrl} alt="" />
            <div className="news-text-area">
                <h3>{props.yearOfDate}</h3>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <br/>
                <p>{props.director}</p>
            </div>
        </div>
        
    )
}
export {LatestNewsFunc , LatestNewsCardFunc}