function LicenseCardFunc(props) {
    return(
        <div className="license-card-area">
            <i class="bi bi-box-fill"></i>
            <div className="text-area">
                <h1>{props.title}</h1>
                <p>{props.price}</p>
            </div>
        </div>
    )
}


export default LicenseCardFunc