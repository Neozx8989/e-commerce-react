function ProductFunc(props){
      return (
      <div className="container">
        <div className="container-text">
          <p>{props.helpus}</p>
          <div className="container-header-right-text">
            <p>{props.store}</p>  {/* icon ? */}
            <p>{props.track}</p>  {/* icon ? */}
          </div>
        </div>
        <header className="header-area">
          <nav>
          <div className="navbar-area">
            <img src={props.logoImageUrl} alt="electon-logo" />
            <input type="text" className="search-input" name="search" placeholder="Search any things"  />
            <button className="button-area">Search</button>
          </div>
          <div className="sign-in">
            <p>{props.signin}</p> 
            <p>*Like-icon</p>
            <p>*Inbox-icon</p>
          </div>
          </nav>
          <div className="nav-items">
              
          </div>
        </header>
      </div>
    )
  }

export default ProductFunc;