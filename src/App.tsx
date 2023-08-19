import logo from '../images/RacoonBearPreview.png';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Mint from './pages/Mint';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mint" element={<Mint />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
