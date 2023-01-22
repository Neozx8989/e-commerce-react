import { Route, Routes, Link } from 'react-router-dom';
import SignUpJs from '../signup/SignUpMain';

function ProductFunc(props) {
  return (
    <div>
      <div className="container-text">
        <p>{props.helpus}</p>
        <div className="container-header-right-text">
          <p><i class="bi bi-geo-alt"></i> {props.store}</p>
          <p><i class="bi bi-truck"></i> {props.truck}</p>
        </div>
      </div>
      <header className="header-area">
        <nav>
          <div className="navbar-area">
            <img src={props.logoImageUrl} alt="electon-logo" />
            <input type="text" className="search-input" name="search" placeholder="Search any things" />
            <button className="button-area">Search</button>
          </div>
          <div className="sign-in">
            <Link to={'signup'}><i class="bi bi-person"></i> Sign up</Link>
            <p><i class="bi bi-heart"></i>{props.wishlist}</p>
            <Link to={'/cart'}><p><i class="bi bi-cart3"></i>{props.addCard}</p></Link>
          </div>
        </nav>
        <div className="nav-items"></div>
      </header>
    </div>
  )
}

export default ProductFunc;