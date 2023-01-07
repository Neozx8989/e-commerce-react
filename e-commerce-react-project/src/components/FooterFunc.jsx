function FooterFunc(props) {
    return(
        <div className="footer-contain">
            <h1>{props.title}</h1>
            <input type="email" name="email" placeholder={props.email}></input>
            <div className="call-us">
                <i class="bi bi-headset"></i>
                <p>{props.contactinfo}</p>
            </div>
        </div>
    )
}

function  FooterBottomFunc(props) {
    return(
        <div className="footer-bottom-contain">
            <img src={props.logoImageUrl} alt="" />
            <p>{props.street}</p>
            <hr/>
            <div className="social-icons">
            <i class="bi bi-google"></i>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-whatsapp"></i>
            </div>
        </div>
    )
}

function FooterTermsFunc(props) {
    return (
        <div className="footer-terms-contain">
            <h1>{props.name}</h1>
            <ul>
                <li><a href="#">{props.product}</a></li>
                <li><a href="#">{props.product2}</a></li>
                <li><a href="#">{props.product3}</a></li>
                <li><a href="#">{props.product4}</a></li>
                <li><a href="#">{props.product5}</a></li>
            </ul>
        </div>
    )
}

export {FooterFunc , FooterBottomFunc , FooterTermsFunc}