import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Naslovnica from './stranice/naslovnica.jsx'
import Natjecanja from './stranice/natjecanja.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Naslovnica />} />
        <Route path="/natjecanja" element={<Natjecanja />} />
      </Routes>
    </BrowserRouter>
  );
}
