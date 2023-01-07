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

function LicenseCardFunc2(props) {
    return(
        <div className="license-card-area">
        <i class="bi bi-cash-coin"></i>
            <div className="text-area">
                <h1>{props.title}</h1>
                <p>{props.price}</p>
            </div>
        </div>
    )
}

function LicenseCardFunc3(props) {
    return(
        <div className="license-card-area">
            <i class="bi bi-shield-lock-fill"></i>
            <div className="text-area">
                <h1>{props.title}</h1>
                <p>{props.price}</p>
            </div>
        </div>
    )
}

export {LicenseCardFunc , LicenseCardFunc2, LicenseCardFunc3}