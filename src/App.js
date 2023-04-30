import { Route, Routes } from 'react-router-dom';
import AnnePage from './page/AnnePage';
import MaryPage from './page/MaryPage';
import SuheePage from './page/SuheePage';
import YejiPage from './page/YejiPage';
import SelectPage from './page/SelectPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SelectPage />} />
      <Route path="/anne" element={<AnnePage />} />
      <Route path="/mary" element={<MaryPage />} />
      <Route path="/suhee" element={<SuheePage />} />
      <Route path="/yeji" element={<YejiPage />} />
    </Routes>
  );
};

export default App;
