import './App.css';
import ProductFunc from './Product';
import products from './Api';
import MainMenu from './components/MainMenu';
import PopularProducts from './data/popular-product';
import PopularProductsFunc from './components/PopularProducts';

function App() {
  const productList = products.map((product) => {
    console.log(product)

    return <ProductFunc 
      helpus={product.helpus} 
      store={product.store}
      truck={product.truck}
      signin={product.signin}
      logoImageUrl={product.logoImageUrl}
    />
  })

    const PopularProductscard = PopularProducts.map((product) => {
      console.log(product)
  
      return <PopularProductsFunc
        productImageUrl={product.productImageUrl} 
      />
    })


  return (
    <div className='menu-container'>
        {productList}
          <MainMenu /> 
          {PopularProductscard}
    </div>
  )
}
export default App;

