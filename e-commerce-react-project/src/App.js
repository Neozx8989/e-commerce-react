import "./App.css";
import {BrowsRoute, Routes, Route, Link} from 'react-router-dom'
import Home from "./Home";
import SignUpJs from "./SignUpMain";
import Navigation from "./Navigation";
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
