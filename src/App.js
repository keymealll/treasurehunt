import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import About from './Pages/About/About';
import Enquiry from "./Pages/Enquiry/Enquiry";
import { Home } from "./Pages/Home/Home";
import { Login } from "./Pages/Login/Login";
import News from './Pages/NewsPromotion/News';
import { Register } from "./Pages/Register/Register";
import TheHunts from './Pages/TheHunts/TheHunts';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/thehunts" element={<TheHunts />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/news" element={<News />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
