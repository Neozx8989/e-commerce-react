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
      </div>
    )
  }

export default ProductFunc;