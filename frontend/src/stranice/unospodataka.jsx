import '../izgled/unospodataka.css'
import NavigacijskaTraka from './navigacijskatraka.jsx';
import { useState } from 'react';


export default function UnosPodataka() {
  const [uloga, setUloga] = useState('');
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
      <form className="unosPodataka">
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
            <input type="text" placeholder="Unesite svoje ime" />
          </div>

          <div className="prezime">
            <label>Prezime:</label>
            <input type="text" placeholder="Unesite svoje prezime" />
          </div>
          {uloga === 'voditelj' && (
            <>
              <div className="imeKluba">
                <label>Ime kluba:</label>
                <input type="text" placeholder="Unesite ime kluba" />
              </div>
    
              <div className="lokacija">
                <label>Lokacija kluba:</label>
                <input type="text" placeholder="Unesite lokaciju kluba" />
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