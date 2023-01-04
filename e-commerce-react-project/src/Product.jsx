function ProductFunc(props){
    return (
      <div className="container">
        <div className="container-text">
          <a>{props.title}</a>
          <div className="container-header-right-text">
            <p>{props.description}</p>
            <p>{props.track}</p>
          </div>
        </div>
        <header className="header-area">
          <nav className="navbar-area">
            <img src={props.logoImageUrl} alt="electon-logo" />

            <input type="text" className="search-input" name="search" placeholder="Search any thing"  />
            <button className="button-area">Search</button>
          </nav>
        </header>
      </div>
    )
  }

export default ProductFunc;