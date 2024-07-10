import {Route, Routes} from 'react-router-dom';
import './styles/base/font.scss';
import './styles/base/common.scss';
import './styles/pages/dashboard.scss';
import './styles/pages/sub/game.scss';
import './styles/components/header.scss';
import './styles/components/footer.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DashBoard from "./pages/DashBoard.jsx";
import mock from './mock/mockApiService.js';
import Game from "./pages/sub/Game.jsx";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<DashBoard/>}/>
          <Route path="/pages/sub/game" element={<Game/>}/>
          <Route path="*" element={<DashBoard/>}/>
      </Routes>
    </>
  )
}

export default App
