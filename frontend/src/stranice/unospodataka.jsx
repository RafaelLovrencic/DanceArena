import '../izgled/unospodataka.css'
import NavigacijskaTraka from './navigacijskatraka.jsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function UnosPodataka() {
  const [uloga, setUloga] = useState('');
  const [ime, setIme] = useState('');
  const [prezime, setPrezime] = useState('');
  const [lokacija, setLokacija] = useState('');
  const [imeKluba, setImeKluba] = useState('');
  const navigate = useNavigate();

  const posaljiPodatke = async (e) => {
    e.preventDefault(); 
    if (!ime || !prezime || !uloga || (uloga === 'voditelj' && (!imeKluba || !lokacija))) {
      alert("Molimo popunite sva obavezna polja!");
      return;
    }
    const podaci = {Ime: ime,
      Prezime: prezime,
      Uloga: uloga,
      ...(uloga === 'voditelj' && {
        Ime_kluba: imeKluba,
        Lokacija: lokacija
      })
    }
    console.log(podaci);
    const response = await fetch('http://localhost:5000/upispodataka/registracija', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(podaci),
    });
    if (response.ok) {
      navigate('/');  
    }
  };
  return (
  <>
    <nav>
      <NavigacijskaTraka />
    </nav>
    <section className='okvirZaPocetakPrijave'>
        <h1 className='dovrsiPrijavu'>Dovrši prijavu!</h1>
        <p className='uputeZaPrijavu'>Za prijavu je potrebno popuniti podatke.</p>
    </section>
    <div className='okvirZaFormu'>
      <form className="unosPodataka"  onSubmit={posaljiPodatke}>
        <div className="odabirUloge">
          <label className="odaberiUlogu">Odaberi ulogu:</label>
          <div className="radioGrupa">
            <label><input type="radio" name="uloga" value="voditelj"
              checked={uloga === 'voditelj'}
              onChange={(e) => setUloga(e.target.value)}/>Voditelj kluba</label>
            <label><input type="radio" name="uloga" value="sudac"
              checked={uloga === 'sudac'}
              onChange={(e) => setUloga(e.target.value)}/>Sudac</label>
            <label><input type="radio" name="uloga" value="organizator"
              checked={uloga === 'organizator'}
              onChange={(e) => setUloga(e.target.value)}/>Organizator</label>
          </div>
        </div>
        <div className='tekstOpcije'>
          <div className="ime">
            <label>Ime:</label>
            <input type="text" placeholder="Unesite svoje ime" value={ime} onChange={(e) => setIme(e.target.value)}/>
          </div>

          <div className="prezime">
            <label>Prezime:</label>
            <input type="text" placeholder="Unesite svoje prezime" value={prezime} onChange={(e) => setPrezime(e.target.value)}/>
          </div>
          {uloga === 'voditelj' && (
            <>
              <div className="imeKluba">
                <label>Ime kluba:</label>
                <input type="text" placeholder="Unesite ime kluba" value={imeKluba} onChange={(e) => setImeKluba(e.target.value)}/>
              </div>
    
              <div className="lokacija">
                <label>Lokacija kluba:</label>
                <input type="text" placeholder="Unesite lokaciju kluba" value={lokacija} onChange={(e) => setLokacija(e.target.value)}/>
              </div>
            </>
          )}
        </div>
        <div className='okvirZaPotvrdu'>
          <button type="submit">Potvrdi</button>  
        </div>
      </form>
    </div>
  </>
  )
}