import '../izgled/navigacijskatraka.css'
import logo from '../izgled/pozadine/logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function NavigacijskaTraka() {
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
  const navigate = useNavigate();
  return (
  <>
    <div className='logo'>
      <Link to="/" className='start'><img src={logo} alt="Logo" className='logoImg'/></Link>
      <p className='DanceArena'>DanceArena</p>
    </div>
    <div className='tipke'>
      {lokacija.pathname !== '/unospodataka' && (
        <button className='prijava'>Prijava</button>
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