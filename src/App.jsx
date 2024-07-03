import {Route, Routes} from 'react-router-dom';
import './styles/base/font.scss';
import './styles/base/common.scss';
import './styles/pages/dashboard.scss';
import './styles/pages/sub/hero.scss';
import './styles/components/header.scss';
import './styles/components/footer.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DashBoard from "./pages/DashBoard.jsx";
import Hero from "./componets/sub/Hero.jsx";
import mock from './mock/mockApiService.js';

function App() {
  return (
    <>
      <Routes>
          <Route path="*" element={<DashBoard/>}/>
          <Route path="/hero" element={<Hero/>}/>
      </Routes>
    </>
  )
}

export default App
