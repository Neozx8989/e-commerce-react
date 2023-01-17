import "./App.css";
import {BrowsRoute, Routes, Route, Link} from 'react-router-dom'
import Home from "./home/Home";
import SignUpJs from "./signup/SignUpMain";
import Navigation from "./navigation-header/Navigation";
function App() {
  
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="signup" element={<SignUpJs/>}/>
        <Route path="home" element={<Home/>}/>
      </Routes>
    </div>
  );
}
export default App;
