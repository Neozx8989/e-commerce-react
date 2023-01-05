import './App.css';
import ProductFunc from './Product';
import products from './Api';
import MainMenu from './components/MainMenu';
import PopularProducts from './data/popular-product';
import PopularProductsFunc from './components/PopularProducts';
import AdverstingFunc from './components/AdverstingSlider';
import AdverstingSlider from './data/adversting'

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

  const AdverstingCard = AdverstingSlider.map((advers) => {
    return <AdverstingFunc
      title={advers.title}
      buttonshop={advers.buttonshop}
      buttonview={advers.buttonview}
      adverstingImageUrl={advers.adverstingImageUrl}
    />
  })

    const PopularProductscard = PopularProducts.map((product) => {
      console.log(product)  
      return <PopularProductsFunc
        productImageUrl={product.productImageUrl} 
        title={product.title}
        item={product.item}
      />
    })


  return (
    <div className='menu-container'>
        {productList}
          < MainMenu /> 
          {AdverstingCard}
           <div className='d-flex gap-4 j-content justify-content-center'>{PopularProductscard}</div>
    </div>
  )
}
export default App;

