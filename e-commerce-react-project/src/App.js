import "./App.css";
import {Routes, Route} from 'react-router-dom'
import Home from "./home/Home";
import SignUpJs from "./signup/SignUpMain";
import Navigation from "./navigation-header/Navigation";
import DetailPageApp from "./home/detailpage/DetailPageApp";
import FooterApp from "./footer/FooterApp";
function App() {
  
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="/signup" element={<SignUpJs/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/detailpage" element={<DetailPageApp/>}/>
      </Routes> 
      <FooterApp/>
    </div>
  );
}
export default App;
