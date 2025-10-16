import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Naslovnica from './stranice/naslovnica.jsx'
import Prijava from './stranice/prijava.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Naslovnica />} />
        <Route path="/prijava" element={<Prijava />} />
      </Routes>
    </BrowserRouter>
  );
}
