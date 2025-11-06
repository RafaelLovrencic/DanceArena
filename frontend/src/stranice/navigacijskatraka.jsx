import '../izgled/navigacijskatraka.css'
import logo from '../izgled/pozadine/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function NavigacijskaTraka({ korisnik }) {
  const [burgerKlasa, setBurgerKlasa] = useState("burgerBar nekliknut")
  const [meniKlasa, setMeniKlasa] = useState("meni skriven")
  const [meniAktivan, setMeniAktivan] = useState(false)

  const azurirajMeni = () => {
    if(!meniAktivan) {
        setBurgerKlasa("burgerBar kliknut")
        setMeniKlasa("meni vidljiv")
    }
    else {
        setBurgerKlasa("burgerBar nekliknut")
        setMeniKlasa("meni skriven")
    }
    setMeniAktivan(!meniAktivan)
  }

  const lokacija = useLocation();
  return (
  <>
    <div className='logo'>
      <Link to="/" className='start'><img src={logo} alt="Logo" className='logoImg'/></Link>
      <p className='DanceArena'>DanceArena</p>
    </div>
    <div className='tipke'>
      {!korisnik && lokacija.pathname !== '/unospodataka' && (
        <button className="prijava" onClick={() => window.location.href="http://localhost:5000/auth/google"}>Prijava</button>
      )}
      {lokacija.pathname !== '/unospodataka' && (
        <div className='burgerMeni' onClick={azurirajMeni}>
          <div className={burgerKlasa}></div>
          <div className={burgerKlasa}></div>
          <div className={burgerKlasa}></div>
        </div>
      )}
      </div>
    <div className={meniKlasa}></div>
  </>
  )
}