import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Naslovnica from './stranice/naslovnica.jsx'
import UnosPodataka from './stranice/unospodataka.jsx';
import Profil from './stranice/profil.jsx';
import { AuthProvider } from "./kontekst/AuthContext";
import Natjecanja from './stranice/natjecanja.jsx'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Naslovnica />} />
          <Route path="/unospodataka" element={<UnosPodataka />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/natjecanja" element={<Natjecanja />} />
      </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
