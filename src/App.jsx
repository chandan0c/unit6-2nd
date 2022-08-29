import "./App.css";
import Navbar from "./components/Navbar"
import { Routes,Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home"
function App() {
  return (
    <div className="App">
       <Navbar/>
       <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/" element={<Home/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
