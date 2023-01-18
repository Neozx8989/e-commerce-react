import "./App.css";
import {Routes, Route} from 'react-router-dom'
import Home from "./home/Home";
import SignUpJs from "./signup/SignUpMain";
import Navigation from "./navigation-header/Navigation";
<<<<<<< HEAD
=======
import DetailPageFunc from "./home/detailpage/DetailPageFunc";
>>>>>>> 4f45792d85c15bb52c509454f8581258f9daffc1
import DetailPageApp from "./home/detailpage/DetailPageApp";
function App() {
  
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="signup" element={<SignUpJs/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="detailpage" element={<DetailPageApp/>}/>
      </Routes>
    </div>
  );
}
export default App;
