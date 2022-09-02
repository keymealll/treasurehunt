import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import About from './Pages/About/About';
import News from './Pages/NewsPromotion/News';
import TheHunts from './Pages/TheHunts/TheHunts';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<TheHunts />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
