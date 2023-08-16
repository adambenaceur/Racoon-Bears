import logo from '../images/RacoonBearPreview.png';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Minting from './pages/Minting';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/minting" element={<Minting />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
