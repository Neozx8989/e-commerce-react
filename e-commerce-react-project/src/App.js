import "./App.css";
import {Routes, Route} from 'react-router-dom'
import Home from "./home/Home";
import SignUpJs from "./signup/SignUpMain";
import Navigation from "./navigation-header/Navigation";
import DetailPageApp from "./home/detailpage/DetailPageApp";
import FooterApp from "./footer/FooterApp";
import { useState } from "react";
import CreateAccApp from "./create-account/CreateAccApp";
import CartApp from "./cart/CartApp";
function App() {
  const [wishlist, setWishlist] = useState([]);
  const [addCard, setAddCard] = useState([])
  return (
    <div>
      <Navigation addCard={addCard} setAddCard={setAddCard}/>
      <Routes>
        <Route path="/createaccount" element={<CreateAccApp/>}/>
        <Route path="/signup" element={<SignUpJs/>}/>
        <Route path="/" element={<SignUpJs/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/detailpage" element={<DetailPageApp/>}/>
        <Route path='/cart' element={<CartApp/>}/>
      </Routes> 
      <FooterApp/>
    </div>
  );
}
export default App;
