import './App.css';
import ProductFunc from './Product';
import products from './Api';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const productList = products.map((product) => {
    console.log(product)

    return <ProductFunc 
      helpus={product.helpus} 
      store={product.store}
      track={product.track}
      signin={product.signin}
      logoImageUrl={product.logoImageUrl}
    />
  })

  return (
    <div className='Cont'>
      <header className="web-header">{productList}</header>
    </div>
  )
}
export default App;

