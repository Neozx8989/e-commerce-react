import './App.css';
import ProductFunc from './Product';
import products from './Seed';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const productList = products.map((product) => {
    console.log(product)

    return <ProductFunc 
      title={product.help} 
      description={product.description}
      track={product.track}
      url={product.url}
      votes={product.votes}
      submitterAvatarUrl={product.submitterAvatarUrl}
      productImageUrl={product.productImageUrl} 
    />
  })

  return (
    <div className='Cont'>
      <div className='container-headerwww'>
       <div className='cont-right-head'>
       </div>
      </div>
      <header className="web-header">
        {productList}
      </header>
    </div>
  )
}
export default App;

