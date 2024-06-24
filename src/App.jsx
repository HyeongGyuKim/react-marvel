import {Route, Routes} from 'react-router-dom';
import './styles/base/font.scss';
import './styles/base/common.scss';
import './styles/pages/dashboard.scss';
import './styles/components/header.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DashBoard from "./pages/DashBoard.jsx";

function App() {
  return (
    <>
      <Routes>
          <Route path="*" element={<DashBoard/>}/>
      </Routes>
    </>
  )
}

export default App
