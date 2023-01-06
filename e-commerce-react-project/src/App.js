import './App.css';
import ProductFunc from './Product';
import products from './Api';
import MainMenu from './components/MainMenu';
import AdverstingPopular from './data/AdverstinPopular';
import AdverstingPopularFunc from './components/AdverstingPopular';

import AdverstingFunc from './components/AdverstingSlider';
import AdverstingSlider from './data/adversting'

import PopularProducts from './data/PopularProducts';
import PopularProductsFunc from './components/PopularProducs';


import ProductsCard from './data/ProductsCard';
import ProductsFunc from './components/ProductsCard';

import SaleProduct from './data/SaleProduct'
import SaleProductFunc from './components/SaleProduct';

import {AddCarts , NextAddCarts } from './data/AddCarts';
import {AddingToCarts , NextAddToCarts} from './components/AddToCarts';


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

    const AdverstingPopularCard = AdverstingPopular.map((product) => {
      console.log(product)  
      return <AdverstingPopularFunc
        productImageUrl={product.productImageUrl} 
        title={product.title}
        item={product.item}
      />
    })

    const PopularProductsArea = PopularProducts.map((products) => {
      return <PopularProductsFunc
        title={products.title}
        item1={products.item1}
        item2={products.item2}
        item3={products.item3}
        item4={products.item4}
      />
    })

    const ProductsCardArea = ProductsCard.map((product)=> {
      return <ProductsFunc 
        productImageUrl={product.productImageUrl}
        title={product.title}
        price={product.price}
        rating={product.rating}
        basket={product.basket}
      />  
    })

    const SaleProductArea = SaleProduct.map((product) => {
      return <SaleProductFunc 
        salelaptop={product.salelaptop}
        newproductbutton={product.newproductbutton}
        title={product.title}
        displaysize={product.displaysize}
        shopproductbutton={product.shopproductbutton}
      />
    })

    const AddToCartArea = AddCarts.map((product) => {
      return <AddingToCarts 
        productImageUrl={product.productImageUrl}
        name={product.name}
        price={product.price}
        ratingstar={product.ratingstar}
        addbutton={product.addbutton}
      />
    })

    const NextAddToCartArea = NextAddCarts.map((product)=> {
      return <NextAddToCarts
      productImageUrl={product.productImageUrl}
      name={product.name}
      price={product.price}
      ratingstar={product.ratingstar}
      />
    })


  return (
    <div className='menu-container'>
        {productList}
          < MainMenu /> 
          {AdverstingCard}
           <div className='d-flex gap-4 j-content justify-content-center'>{AdverstingPopularCard}</div>
           {PopularProductsArea}
          <div className='all-products'>{ProductsCardArea}</div>
          {SaleProductArea}
          <div className='all-adding-cart'>
            {AddToCartArea}
            <div className='next-adding-cart'>{NextAddToCartArea}</div>
          </div>
    </div>
  )
}
export default App;

