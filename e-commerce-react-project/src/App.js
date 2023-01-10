import './App.css';
import AliceCarousel from 'react-alice-carousel'


import ProductFunc from './Product';
import products from './Api';
import MainMenu from './components/MainMenu';
import {AdverstingPopular , Adversting} from './data/AdverstinPopular';
import {AdverstingPopularFunc , AdverstingFunc} from './components/AdverstingPopular';

import {PopularProducts, ProductsCard} from './data/PopularProducts';
import {PopularProductsFunc , ProductsCardFunc}from './components/PopularProducs';

import {SaleLaptop , AddCarts , NextAddCarts } from './data/AddCarts';
import {SaleProductFunc , AddingToCarts , NextAddToCarts} from './components/AddToCarts';

import { LicensesData , LicensesData2 , LicensesData3 } from './data/Licenses';
import { LicenseCardFunc , LicenseCardFunc2 , LicenseCardFunc3} from './components/LicenseCard';

import { CommentCard, CommentCard2, CommentCard3 } from './data/CommentCard';
import { CommentCardFunc , CommentCardFunc2 , CommentCardFunc3 } from './components/CommentCardFunc';

import {SponserData , LatestNewsData , NewsCardData , NewsCardData2 } from './data/LatestNews';
import {SponsereFunc , LatestNewsFunc, LatestNewsCardFunc , LatestNewsCardFunc2 } from './components/LatestNewsFunc';

import { FooterContactData , FooterBottomData , FooterTermsData } from './data/Footer';
import { FooterFunc , FooterBottomFunc , FooterTermsFunc } from './components/FooterFunc';


function App() {
  const productList = products.map((product) => {
    return <ProductFunc 
      helpus={product.helpus} 
      store={product.store}
      truck={product.truck}
      signin={product.signin}
      logoImageUrl={product.logoImageUrl}
    />
  })

  const AdverstingCard = Adversting.map((advers) => {
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
      return <ProductsCardFunc 
        productImageUrl={product.productImageUrl}
        title={product.title}
        price={product.price}
        rating={product.rating}
        basket={product.basket}
      />  
    })

    const SaleProductArea = SaleLaptop.map((product) => {
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

    const LicenseCardArea = LicensesData.map((product)=> {
      return <LicenseCardFunc
        title={product.title}
        price={product.price}
      />
    })

    const LicenseCardArea2 = LicensesData2.map((product)=> {
      return <LicenseCardFunc2
        title={product.title}
        price={product.price}
      />
    })

    const LicenseCardArea3 = LicensesData3.map((product)=> {
      return <LicenseCardFunc3
        title={product.title}
        price={product.price}
      />
    })

    const CommentCardArea = CommentCard.map((card)=>{
      return <CommentCardFunc 
        profileImageUrl={card.profileImageUrl}
        name={card.name}
        comment={card.comment}
      />
    })

    const CommentCardArea2 = CommentCard2.map((card)=>{
      return <CommentCardFunc2 
        profileImageUrl={card.profileImageUrl}
        name={card.name}
        comment={card.comment}
      />
    })

    const CommentCardArea3 = CommentCard3.map((card)=>{
      return <CommentCardFunc3 
        profileImageUrl={card.profileImageUrl}
        name={card.name}
        comment={card.comment}
      />
    })

    const SponserCompanyArea = SponserData.map((logos)=> {
      return <SponsereFunc 
        logoImageUrl={logos.logoImageUrl}
      />
    })

    const LatestNewsArea = LatestNewsData.map((latestnews)=> {
      return <LatestNewsFunc 
        title={latestnews.title}
        allnews={latestnews.allnews}
      />
    })

    const LatestNewsCardArea = NewsCardData.map((card) => {
      return <LatestNewsCardFunc
        ImageUrl={card.ImageUrl}
        yearOfDate={card.yearOfDate}
        title={card.title}
        text={card.text}
        director={card.director}
      />
    })

    const LatestNewsCardArea2 = NewsCardData2.map((card) => {
      return <LatestNewsCardFunc2
        ImageUrl={card.ImageUrl}
        yearOfDate={card.yearOfDate}
        title={card.title}
        text={card.text}
        director={card.director}
      />
    })

    const FooterContactArea = FooterContactData.map((info)=> {
      return <FooterFunc 
        title={info.title}
        email={info.email}
        contactinfo={info.contactinfo}
      />
    })

    const FooterBottomArea = FooterBottomData.map((info)=> {
      return <FooterBottomFunc
        logoImageUrl={info.logoImageUrl}
        street={info.street}
      />
    })

    const FooterTermsArea = FooterTermsData.map((info)=> {
      return <FooterTermsFunc 
        name={info.name}
        product={info.product}
        product2={info.product2}
        product3={info.product3}
        product4={info.product4}
        product5={info.product5}
      />
    })

  return (
    <div className='god-cont'>
      <div className='menu-container'>
          {productList}
            < MainMenu /> 
          <div className='carousel-adversting'>
              {AdverstingCard}
          </div>
          <div className='carousel-three-cards'>
            <AliceCarousel autoPlay autoPlayInterval="3000">
              <div className='d-flex gap-4 j-content justify-content-center'>{AdverstingPopularCard}</div>
              <div className='d-flex gap-4 j-content justify-content-center'>{AdverstingPopularCard}</div>
              <div className='d-flex gap-4 j-content justify-content-center'>{AdverstingPopularCard}</div>
            </AliceCarousel>
          </div>
            {PopularProductsArea}
            <AliceCarousel autoPlay autoPlayInterval="3000">
              <div className='all-products'>{ProductsCardArea}</div>
              <div className='all-products'>{ProductsCardArea}</div>
              <div className='all-products'>{ProductsCardArea}</div>
            </AliceCarousel>
            {SaleProductArea}
            <div className='all-adding-cart'>
              {AddToCartArea}
              <div className='next-adding-cart'>{NextAddToCartArea}</div>
            </div>
            <div className='license-card-cont'>
              {LicenseCardArea}
              {LicenseCardArea2}
              {LicenseCardArea3}
            </div>
            <AliceCarousel autoPlay autoPlayInterval="3000">
              <div className='comment-card-area-cont'>
                {CommentCardArea}
                {CommentCardArea2}
                {CommentCardArea3}
              </div>
              <div className='comment-card-area-cont'>
                {CommentCardArea}
                {CommentCardArea2}
                {CommentCardArea3}
              </div>
              <div className='comment-card-area-cont'>
                {CommentCardArea}
                {CommentCardArea2}
                {CommentCardArea3}
              </div>
            </AliceCarousel>
            <div className='sponser-company-logo'>
              {SponserCompanyArea}
            </div>
            <div className='latest-news-zone'>
              {LatestNewsArea}
              <AliceCarousel autoPlay autoPlayInterval="3000">
                <div className='card-news-zone'>
                  {LatestNewsCardArea}  
                  {LatestNewsCardArea2}  
                </div>
                <div className='card-news-zone'>
                  {LatestNewsCardArea}  
                  {LatestNewsCardArea2}  
                </div>
                <div className='card-news-zone'>
                  {LatestNewsCardArea}  
                  {LatestNewsCardArea2}  
                </div>
                <div className='card-news-zone'>
                  {LatestNewsCardArea}  
                  {LatestNewsCardArea2}  
                </div>
                <div className='card-news-zone'>
                  {LatestNewsCardArea}  
                  {LatestNewsCardArea2}  
                </div>
              </AliceCarousel>
            </div>
            <div className='footer-zone'>
              {FooterContactArea}
              <div className='footer-bottom-zone'>
                {FooterBottomArea}
                {FooterTermsArea}
              </div>
            </div>
      </div>
      </div>
  )
}
export default App;

