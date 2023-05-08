import { Route, Routes } from 'react-router-dom';
import AnnePage from './page/AnnePage';
import MaryPage from './page/MaryPage';
import SuheePage from './page/SuheePage';
import YejiPage from './page/YejiPage';
import SelectPage from './page/SelectPage.js';
import LogPage from './page/LogPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SelectPage />} />
      <Route path="/anne" element={<AnnePage />} />
      <Route path="/mary" element={<MaryPage />} />
      <Route path="/suhee" element={<SuheePage />} />
      <Route path="/yeji" element={<YejiPage />} />
      <Route path="/logs" element={<LogPage />} />
    </Routes>
  );
};

export default App;
