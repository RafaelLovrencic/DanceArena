import '../izgled/unospodataka.css'
import NavigacijskaTraka from './navigacijskatraka.jsx';
import { useState, useEffect } from 'react';
import { PORT } from '../config.js';

export default function UnosPodataka() {
  const [korisnik, setKorisnik] = useState(null);
  const [uloga, setUloga] = useState('');
  const [ime, setIme] = useState('');
  const [lokacija, setLokacija] = useState('');
  const [imeKluba, setImeKluba] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
  const dohvatiKorisnika = async () => {
    try {
      const response = await fetch(
        `http://localhost:${PORT}/auth/provjera-autentifikacije`,
        { credentials: "include" }
      );

      if (!response.ok) {
        window.location.replace("/");
        return;
      }

      const podaci = await response.json();
      setKorisnik(podaci.korisnik);
      setIme(podaci.korisnik.ime || "");
      setUloga(podaci.korisnik.role || "");
      
      // ako korisnik već ima ulogu blokiram pristup i redirectam na naslovnicu
      if (podaci.korisnik.role) {
        window.location.replace("/");
        return;
      }

      setLoading(false);
    } catch (err) {
      console.error(err);
      window.location.replace("/");
    }
  };

  dohvatiKorisnika();
  }, []);

  const posaljiPodatke = async (e) => {
    e.preventDefault(); 
    if (!ime || !uloga || (uloga === 'voditelj' && (!imeKluba) && (!lokacija))) {
      alert("Molimo popunite sva polja!");
      return;
    }

    try {
      const response = await fetch(`http://localhost:${PORT}/unospodataka`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          ime,
          uloga,
          imeKluba: uloga === 'voditelj' ? imeKluba : null,
          lokacija: uloga === 'voditelj' ? lokacija : null,
        }),
      });

      if (!response.ok) {
        setError("Greška pri ažuriranju profila");
        return;
      }

      window.location.replace("/");
    } catch (err) {
      console.error(err);
      setError("Greška pri komunikaciji sa serverom.");
    }
  };

  if (loading) return <p>Učitavanje...</p>;

  return (
  <>
    <nav>
      <NavigacijskaTraka korisnik={korisnik} />
    </nav>
    <section className='okvirZaPocetakPrijave'>
        <h1 className='dovrsiPrijavu'>Dovrši prijavu!</h1>
        <p className='uputeZaPrijavu'>Za prijavu je potrebno popuniti podatke.</p>
      </section>
      <div className='okvirZaFormu'>
        <form className="unosPodataka" onSubmit={posaljiPodatke}>
          {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}
          
          <div className="odabirUloge">
            <label className="odaberiUlogu">Odaberi ulogu:</label>
            <div className="radioGrupa">
              <label>
                <input 
                  type="radio" 
                  name="uloga" 
                  value="voditelj"
                  checked={uloga === 'voditelj'}
                  onChange={(e) => setUloga(e.target.value)}
                />
                Voditelj kluba
              </label>
              <label>
                <input 
                  type="radio" 
                  name="uloga" 
                  value="sudac"
                  checked={uloga === 'sudac'}
                  onChange={(e) => setUloga(e.target.value)}
                />
                Sudac
              </label>
              <label>
                <input 
                  type="radio" 
                  name="uloga" 
                  value="organizator"
                  checked={uloga === 'organizator'}
                  onChange={(e) => setUloga(e.target.value)}
                />
                Organizator
              </label>
            </div>
          </div>
          
          <div className='tekstOpcije'>
            <div className="ime">
              <label>Ime i prezime:</label>
              <input 
                type="text" 
                placeholder="Unesite svoje ime i prezime"
                value={ime}
                onChange={(e) => setIme(e.target.value)}
              />
            </div>

            {uloga === 'voditelj' && (
              <>
                <div className="imeKluba">
                  <label>Ime kluba:</label>
                  <input 
                    type="text" 
                    placeholder="Unesite ime kluba"
                    value={imeKluba}
                    onChange={(e) => setImeKluba(e.target.value)}
                  />
                </div>
      
                <div className="lokacija">
                  <label>Lokacija kluba:</label>
                  <input 
                    type="text" 
                    placeholder="Unesite lokaciju kluba"
                    value={lokacija}
                    onChange={(e) => setLokacija(e.target.value)}
                  />
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