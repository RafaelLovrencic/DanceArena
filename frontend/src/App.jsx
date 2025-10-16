import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Naslovnica from './stranice/naslovnica.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Naslovnica />} />
      </Routes>
    </BrowserRouter>
  );
}
