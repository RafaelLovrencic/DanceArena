import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Naslovnica from './stranice/naslovnica.jsx'
import UnosPodataka from './stranice/unospodataka.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Naslovnica />} />
        <Route path="/unospodataka" element={<UnosPodataka />} />
      </Routes>
    </BrowserRouter>
  );
}
